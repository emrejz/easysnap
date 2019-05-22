const express=require("express")
const cors = require('cors')
const {ApolloServer}=require("apollo-server-express")
const {importSchema}=require("graphql-import")
const resolvers=require("./graphql/resolvers/index")
const db=require("./helpers/db")
//models 
const UserSchema=require("./models/UserSchema")
const SnapSchema=require("./models/SnapSchema")
require("dotenv").config()
const server=new ApolloServer({
    typeDefs:importSchema("./graphql/schema-types.graphql"),
    resolvers,
    context:{
        UserSchema,
        SnapSchema
    }
    
})
db();
const app=express();
app.use(cors())
server.applyMiddleware({app})
app.listen({port:4000},()=>{
    console.log("apollo server ok")
})