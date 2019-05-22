const userQuery={
    user:async (parent,args,{UserSchema})=>{
        return await UserSchema.findById(args.id)    
    },
    users:async(parent,args,{UserSchema})=>{
        return await UserSchema.find({}).sort({"createdAt":1})
    },
    activeUser:async (parent,args,{UserSchema,activeUser})=>{
        return await  UserSchema.findOne({username:activeUser.username})
    }
    
}
module.exports=userQuery