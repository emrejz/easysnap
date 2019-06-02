const User={
    snaps:async(parent,args,{SnapSchema})=>{
        try {
            return await SnapSchema.find({userID:parent.id}).sort({"createdAt":-1})
        } catch (error) {
            throw new Error(error)
        }

    }
}
module.exports=User