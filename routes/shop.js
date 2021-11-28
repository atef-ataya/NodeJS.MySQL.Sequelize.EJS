//Node Core Module
const path = require('path');
//Third Party Module
const express = require('express');
//My Own Imports
const shopController = require('../controllers/shop');

const router = express.Router();

// / => GET
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;