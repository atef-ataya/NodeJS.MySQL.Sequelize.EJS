//Node Core Module
const path = require('path');
//Third Party Module
const express = require('express');
//My Own Imports
const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;