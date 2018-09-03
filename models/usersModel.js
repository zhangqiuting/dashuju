const mongoose = require("./dbConfig")

//js object->user mapping schema

const Schema = mongoose.Schema;

let userSchema = new Schema({
    name:String,
    age: Number,
    sex:String
})


let userModel = mongoose.model("shuju01",userSchema)

userModel.find({},(err,res)=>{
    console.log(res)
})

// let findUsers = (where,cb)=>{
//     userModel.find(where,cb);
//     console.log(cb);
// }

// let findByPager = (where,pageSize,pageIndex,cb)=>{
//     userModel.find(where).skip(pageSize*pageIndex).limit(pageSize).exec(cb)
// }
//
// let delUser = (where,cb)=>{
//     userModel.deleteOne(where,cb)
// }

// let updateUserById = (where,setWhere,cb) =>{
//     userModel.updateOne(where,setWhere,cb)
// }

module.exports = {
    // findUsers,
    // findByPager,
    // delUser,
    // updateUserById
}