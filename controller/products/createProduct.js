const Product = require("../../models/productModal");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send({
      message: "Product create successfully",
      success: true,
      product: product,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      success: false,
    });
  }
};

module.exports = createProduct;
