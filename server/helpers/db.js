const mongoose=require("mongoose")

module.exports=()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true})
    .then(res=>console.log("mongodb ok"))
    .catch(err=>console.error("mongodb err"))
}