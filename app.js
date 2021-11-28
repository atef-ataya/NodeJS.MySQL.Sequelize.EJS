//Core Module Specific Modules
const path = require('path');

//Third Party Packages
const express = require('express');
const bodyParser = require('body-parser');

//Imports my Own Module
const errorControllers = require('./controllers/error');

const app = express(); //request handler

app.set('view engine', 'ejs'); //Global Configuration Value, a value that can't understand, pug built-in template
app.set('views', 'views');

//My Own File/Packages
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Middlewares
app.use(bodyParser.urlencoded({ extended: false })); //middleware body parser url-encoded bodies and at the end it will execute next()
app.use(express.static(path.join(__dirname, 'public'))); //STATIC middleware folder that we need to grant read access publically

//Routers
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Page Not Found
app.use(errorControllers.get404);

//Server Configuration
app.listen(3000);