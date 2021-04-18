const { Product, Categories } = require("../../db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  getAllProducts: async () => {
    return await Product.findAll();
  },
  findProductById: async (id) => {
    return await Product.findOne({
      where: {
        id: id
      }
    });
  },
  getProductsByLetterIncludeInTheName: async (inputValue) => {
    return await Product.findAll({
      where: {
        name: {
          [Op.iLike]: '%' + inputValue + '%'
        }
      },
      include: [{ model: Categories, as: "categories" }],
    });
  }
};
