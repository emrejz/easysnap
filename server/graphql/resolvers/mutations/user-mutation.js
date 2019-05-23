const bcryptjs = require("bcryptjs")
const generateToken = require("../../../helpers/jwt").generateToken

module.exports = {
    addUser: async (parent, { data: { username, password } }, { UserSchema,pubSub }) => {
        const user = await UserSchema.findOne({
            username
        })
        if (user) {
            throw new Error("username must be unique")
        }
        const newUser=await new UserSchema({
            username, password
        }).save()
        pubSub.publish("newUser",{user:newUser})
        return{token:generateToken(newUser)}

    },
    signIn: async (parent, { data: { username, password } }, { UserSchema }) => {
        const user = await UserSchema.findOne({ username })
        if (!user) {
            throw new Error("not found this username")
        }
        else {
            let result=await bcryptjs.compare(password, user.password)
                     if (result) {
                       return {token:generateToken(user)}        
                     } else {
                         throw new Error("wrong password")
                     }
             }
    }
}