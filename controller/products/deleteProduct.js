const Product = require("../../models/productModal");

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send({
        message: "Please provide the product id",
        success: false,
      });
    }
    const product = await Product.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "product deleted successfully",
      product: product,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = deleteProduct;
