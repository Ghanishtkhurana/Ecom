const express = require("express")
const createProduct = require("../../controller/products/createProduct")
const getAllProducts = require("../../controller/products/getProduct")
const updateProduct = require("../../controller/products/updateProduct")
const deleteProduct = require("../../controller/products/deleteProduct")
const app = express.Router()
app.use(express.json())

app.post("/create",createProduct)
app.get("/getproducts",getAllProducts)
app.put("/updateproduct/:id",updateProduct)
app.delete("/deleteproduct/:id",deleteProduct)

module.exports = app