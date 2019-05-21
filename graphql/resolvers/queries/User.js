const User={
    snaps:async(parent,args,{SnapSchema})=>{
        return await SnapSchema.find({userID:parent.id})
    }
}
module.exports=User