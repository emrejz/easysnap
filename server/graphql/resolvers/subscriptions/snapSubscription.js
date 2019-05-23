const {withFilter}=require("apollo-server")
module.exports={
  snap:{
    subscribe:withFilter((parent,args,{pubSub})=>pubSub.asyncIterator("newSnap"),
  
     (payload,variables)=>variables.userID ? String(payload.snap.userID)===variables.userID : true
     
  )}
}