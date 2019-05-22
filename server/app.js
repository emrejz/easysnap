const express=require("express")
const cors = require('cors')
const {ApolloServer}=require("apollo-server-express")
const {importSchema}=require("graphql-import")
const resolvers=require("./graphql/resolvers/index")
const db=require("./helpers/db")
const verifyToken=require("./helpers/jwt").verifyToken
//models 
const UserSchema=require("./models/UserSchema")
const SnapSchema=require("./models/SnapSchema")
require("dotenv").config()
const server=new ApolloServer({
    typeDefs:importSchema("./graphql/schema-types.graphql"),
    resolvers,
    context:({req})=>({
        UserSchema,
        SnapSchema,
        activeUser:req.activeUser
    })
    
})
db();
const app=express();
app.use(cors())
app.use(async(req,res,next)=>{
    const token=req.headers["authorization"]
    if(token && token!=="null"){
        try {
            const activeUser=await verifyToken(token)
                req.activeUser=activeUser
           
        } catch (error) {
            console.log(error)
        }
        
    }
    next()
})

server.applyMiddleware({app})
app.listen({port:4000},()=>{
    console.log("apollo server ok")
})