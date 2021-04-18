const { Product } = require('../../db');

module.exports = {
    deleteProductById: async (id) => {
        return await Product.destroy({
            where: {
              id: id,
            }
          }).then(product =>{
            return product === 1 ? "product delete succesfully" : "product dons´t exist";
        }).catch((err)=>{
            return err
        });
    },
};
