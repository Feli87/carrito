const server = require("express").Router();
const {createProduct } = require("../../controllers/products/post.products");


server.post("/", (req, res, next) => {

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

  return createProduct(product).then((product) => {
      res.status(200).json(product);
    }).catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = server;