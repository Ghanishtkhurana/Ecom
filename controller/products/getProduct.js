const Product = require("../../models/productModal");

const getAllProducts = async (req, res) => {
  try {
    const AllProducts = await Product.find();
    res.status(200).send({
      message: "Product create successfully",
      success: true,
      products: AllProducts,
    });
  } catch (error) {
    res.send(400).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = getAllProducts;
