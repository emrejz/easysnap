const Mutation={
    addSnap:async (parent,{data},{SnapSchema,pubSub})=>{
       try {
            const snap=await new SnapSchema({
                ...data
            }).save();
            pubSub.publish("newSnap",{snap})
            return snap
       } catch (error) {
          throw new Error(error)
       }
    }}
module.exports=Mutation