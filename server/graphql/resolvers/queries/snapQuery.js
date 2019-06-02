const snapQuery={
    snap:async(parent,args,{SnapSchema})=>{
        try {
            return await SnapSchema.findById(args.id)
        } catch (error) {
            throw new Error(error)
        }
        
    },
    snaps:async(parent,args,{SnapSchema})=>{
        try {
               return await SnapSchema.find({}).sort({"createdAt":-1})
        } catch (error) {
            throw new Error(error)
        }
     
    }
}
module.exports=snapQuery