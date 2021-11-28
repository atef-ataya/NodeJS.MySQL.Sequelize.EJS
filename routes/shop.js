//Node Core Module
const path = require('path');
//Third Party Module
const express = require('express');
//My Own Imports
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;