const userQuery={
    user:async (parent,args,{UserSchema})=>{
        try {
           return await UserSchema.findById(args.id)    
        } catch (error) {
            throw new Error(error)
        }
         
    },
    users:async(parent,args,{UserSchema})=>{
        try {
            return await UserSchema.find({})
        } catch (error) {
            throw new Error(error)
        }
       
    },
    activeUser:async (parent,args,{UserSchema,activeUser})=>{
      
        try {   
                if(!activeUser)
                    return null
                else
                return await  UserSchema.findOne({username:activeUser.username})
           
        } catch (error) {
            throw new Error(error)
        }
          
       
    }
    
}
module.exports=userQuery