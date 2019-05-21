const Mutation={
    addSnap:async (parent,{data},{SnapSchema})=>{
        const snap=await new SnapSchema({
            ...data
        })
        return snap.save()
    }}
module.exports=Mutation