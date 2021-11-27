//Node Core Module
const path = require('path');
//Third Party Module
const express = require('express');
//My Own Imports
const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0, activeShop: true, productCSS: true });
});

module.exports = router;