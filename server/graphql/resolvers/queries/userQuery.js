const userQuery={
    user:async (parent,args,{UserSchema})=>{
        return await UserSchema.findById(args.id)    
    },
    users:async(parent,args,{UserSchema})=>{
        return await UserSchema.find({}).sort({"createdAt":1})
    },
    activeUser:async (parent,args,{UserSchema,activeUser})=>{
      
        try {
            if(typeof activeUser!==undefined)
            return await  UserSchema.findOne({username:activeUser.username})
            else
            return null
        } catch (error) {
            return null
        }
          
       
    }
    
}
module.exports=userQuery