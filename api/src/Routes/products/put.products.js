const server = require("express").Router();
const {editProduct} = require("../../controllers/products/put.products");

server.put("/:productId", (req, res, next) => {

  const {productId} = req.params

  let { name, description, brand, price, overcome, amount, measure } = req.body;

  let product = {
    name: name,
    description: description,
    brand: brand,
    price: price,
    overcome: overcome,
    amount: amount,
    measure:measure
  };

  return editProduct(product, productId).then((product) => {
      res.status(200).json(product);
    }).catch((error) => {
      res.status(400).json(error);
    });
});


module.exports = server;