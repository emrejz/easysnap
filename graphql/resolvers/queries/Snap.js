const Snap={
    user:async(parent,args,{UserSchema})=>{
        return await UserSchema.findById(parent.userID)
    }
}
module.exports=Snap