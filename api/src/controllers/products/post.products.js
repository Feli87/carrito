const { Product } = require("../../db");

module.exports = {

  createProduct: async (product) => {
    return await Product.create(product).then(product =>  product );  
  } 
};
