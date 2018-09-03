const mongoose = require("mongoose")

//第一步,建立连接
mongoose.connect("mongodb://localhost:27017/dashuju",{ useNewUrlParser: true })

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected!")
})

module.exports = mongoose


//第2步:数据库schema