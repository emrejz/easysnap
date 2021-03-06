const mongoose =require("mongoose")
const Schema=mongoose.Schema

const SnapSchema=new Schema({
    userID:{
        type:Schema.Types.ObjectId,
    },
    text:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

mongoose.Promise=global.Promise
module.exports=mongoose.model("snap",SnapSchema)