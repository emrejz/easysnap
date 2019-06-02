const express=require("express")
const http = require('http');
const cors = require('cors')
const {ApolloServer,PubSub}=require("apollo-server-express")
const {importSchema}=require("graphql-import")
const resolvers=require("./graphql/resolvers/index")
const db=require("./helpers/db")
const verifyToken=require("./helpers/jwt").verifyToken
//models 
const UserSchema=require("./models/UserSchema")
const SnapSchema=require("./models/SnapSchema")
require("dotenv").config()
db();
const app=express();
app.use(cors())
const pubSub=new PubSub();
const server=new ApolloServer({
    typeDefs:importSchema("./graphql/schema-types.graphql"),
    resolvers,
    context:({req})=>({
        UserSchema,
        SnapSchema,
        pubSub,
        activeUser:req ? req.activeUser : null
    })
    
})

app.use(async(req,res,next)=>{
        try {  
            const token=req.headers["authorization"]    
            if(token && token!=="null" && token!==undefined){
                const activeUser=await verifyToken(token)
                req.activeUser=activeUser
           
        }} catch (error) {
            next()
            throw new Error(error)
        }
        
    
    next()})


server.applyMiddleware({app})
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen({port:4000},()=>{
    console.log("apollo server ok")
})