require("dotenv").config()
const mongoose = require("mongoose")

const connect = async()=>{
    await mongoose.connect(process.env.MONGODB)
}

module.exports = connect