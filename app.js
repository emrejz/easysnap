const express=require("express")
const {ApolloServer}=require("apollo-server-express")
const {importSchema}=require("graphql-import")
const resolvers=require("./graphql/resolvers/index")
const db=require("./helpers/db")
//models 
const UserSchema=require("./models/UserSchema")
require("dotenv").config()
const server=new ApolloServer({
    typeDefs:importSchema("./graphql/schema-types.graphql"),
    resolvers,
    context:{
        UserSchema
    }
    
})
db();
const app=express();
server.applyMiddleware({app})
app.listen({port:4000},()=>{
    console.log("apollo server ok")
})