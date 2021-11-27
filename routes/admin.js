//Nodejs Core Module
const path = require('path');
//Third Party Modules
const express = require('express');
//My Own Imports
const rootDir = require('../util/path');
//This router is like mini express app
const router = express.Router()

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/');
});

exports.routes = router;
exports.products = products;