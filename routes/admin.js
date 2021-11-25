//Nodejs Core Module
const path = require('path');
//Third Party Modules
const express = require('express');
//My Own Imports
const rootDir = require('../util/path');

const router = express.Router() //This router is like mini express app

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;