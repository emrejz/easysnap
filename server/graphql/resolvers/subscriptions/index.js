const snapSubscription=require("./snapSubscription")
const userSubscription=require("./userSubscription")

module.exports={
    ...snapSubscription,
    ...userSubscription
}