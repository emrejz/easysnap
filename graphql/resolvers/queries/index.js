const userQuery=require("./userQuery")
const snapQuery=require("./snapQuery")

module.exports={
    ...userQuery,
    ...snapQuery
}