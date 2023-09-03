const Product = require("../../models/productModal");

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const product = await Product.findById(id);

      if (product) {
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        return res.status(200).send({
          message: "Product updated successfully",
          success: true,
          product: updateProduct,
        });
      } else {
        return res.status(400).send({
          message: "product not found with this id",
          success: false,
        });
      }
    } else {
      res.status(400).send({
        success: false,
        message: "Please provide the product id",
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = updateProduct;
