const Snap={
    user:async(parent,args,{UserSchema})=>{
       try {
        return await UserSchema.findById(parent.userID)
       } catch (error) {
           throw new Error(error)
       }
    }
}
module.exports=Snap