const jwt = require('jsonwebtoken');
module.exports.generateToken=({username})=>{
   return jwt.sign({ username }, process.env.API_SECRET_KEY,{expiresIn:720})}      

module.exports.verifyToken=(token)=>{
   return jwt.verify(token,process.env.API_SECRET_KEY)
}