const express = require("express")
const cors = require("cors")
const productRouter = require("./routes/product/product.route")
const app = express()
app.use(cors())
app.use("/product",productRouter)

app.get("/",(req,res)=>{
    res.send("Homepage :)")
})

module.exports = app