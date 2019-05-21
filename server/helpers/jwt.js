const jwt = require('jsonwebtoken');
module.exports=generateToken=({username})=>{
   return jwt.sign({ username }, process.env.API_SECRET_KEY,{expiresIn:720})}      
