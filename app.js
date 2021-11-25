//Core Module Specific Modules
// const http = require('http');

//Third Party Packages
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //request handler

//Middlewares
app.use(bodyParser.urlencoded({ extended: true })); //middleware body parser url-encoded bodies and at the end it will execute next()

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

//Server Configuration
app.listen(3000);