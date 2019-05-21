const userQuery={
    user:async (parent,args,{UserSchema})=>{
        return await UserSchema.findById(args.id)
        
    },
    users:(parent,args,{UserSchema})=>{
        return UserSchema.find({}).sort({"createdAt":1})
    }
    
}
module.exports=userQuery