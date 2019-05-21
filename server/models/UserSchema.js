const mongoose =require("mongoose")
const bcrypt = require('bcryptjs');
const Schema=mongoose.Schema

const UserSchema=new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
UserSchema.pre("save",function(next){
    if(!this.isModified()){
        return next()
    }else{
        bcrypt.hash(this.password, 8,(err, hash)=>{
            this.password=hash;
            return next()
        });
    }
})

module.exports=mongoose.model("user",UserSchema)