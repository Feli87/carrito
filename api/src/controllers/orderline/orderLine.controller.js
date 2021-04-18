const { OrderLine } = require("../../db");

module.exports = {
  createOrderLine: async (order) => {
    var newOrder = order;
    try {
        return await OrderLine.findAll().then(async (orders)=>{
          var aux = false

          for (let i = 0; i < orders.length; i++) {

            if(orders[i].dataValues.orderId === newOrder.orderId
               && orders[i].dataValues.productId === newOrder.productId){
                  aux = true
            }            
          }
          console.log("AUX 2", aux)
          if(!aux){
            return await OrderLine.create(order)
          }
        })
    } catch (error) {
      return error
    } 
  },
  getOrderLines: async () => {
    return await OrderLine.findAll().then((orders) => orders);
  },
  getOrderLineById: async (idOrder) => {
    return await OrderLine.findByPk(idOrder).then((order) => order);
  },
  editOrderLine: async (orderLineId, order) => {
    return await OrderLine.update(order, {
      where: {
        id: orderLineId,
      },
    }).then((order) => order);
  },
  deleteOrderLine: async (orderLineId) => {
    return await OrderLine.destroy({
      where: {
        id: orderLineId,
      },
    }).then((order) => order);
  },
  deleteAllOrderLineByOrderId: async (orderId) => {
    return await OrderLine.destroy({
      where: {
        orderId: orderId,
      },
    }).then((order) => order);
  },
};
