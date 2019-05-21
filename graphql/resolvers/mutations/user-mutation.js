module.exports={
    addUser:async (parent,{data:{username,password}},{UserSchema})=>{
        const user=await UserSchema.findOne({
          username
        })
        if(user){
            throw new Error("hebele hübele")
        }
        return await new UserSchema({
            username,password
        }).save()
       
    }
}