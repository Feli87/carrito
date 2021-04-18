const { Router } = require('express');

//Importamos los routers
const getUser = require('./users/get.users');
const postUser = require('./users/post.users');
const deleteUser = require('./users/delete.users');
const putUser = require('./users/put.users');

const getProduct = require('./products/get.products');
const postProduct = require('./products/post.products');
const deleteProduct = require('./products/delete.products');
const putProduct = require('./products/put.products');

const getOrderline = require('./orderline/get.orderLine');
const postOrderline = require('./orderline/post.orderLine');
const deleteOrderline = require('./orderline/delete.orderLine');
const putOrderline = require('./orderline/put.orderLine');

const getOrder = require('./order/get.order');
const postOrder = require('./order/post.order');
const deleteOrder = require('./order/delete.order');
const putOrder = require('./order/put.order');

const router = Router();

// Configuramos los routers
router.use('/users', getUser);
router.use('/users', postUser);
router.use('/users', deleteUser);
router.use('/users', putUser);

router.use('/products', getProduct);
router.use('/products', postProduct);
router.use('/products', deleteProduct);
router.use('/products', putProduct);

router.use('/orderline', getOrderline);
router.use('/orderline', postOrderline);
router.use('/orderline', deleteOrderline);
router.use('/orderline', putOrderline);

router.use('/order', getOrder);
router.use('/order', postOrder);
router.use('/order', deleteOrder);
router.use('/order', putOrder);


module.exports = router;