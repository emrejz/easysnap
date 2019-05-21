const snapQuery={
    snap:async(parent,args,{SnapSchema})=>{
        return await SnapSchema.findById(args.id)
    },
    snaps:async(parent,args,{SnapSchema})=>{
        return await SnapSchema.find({})
    }
}
module.exports=snapQuery