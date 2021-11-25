//Core Module Specific Modules
const path = require('path');

//Third Party Packages
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); //request handler

//My Own File/Packages
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const exp = require('constants');

//Middlewares
app.use(bodyParser.urlencoded({ extended: true })); //middleware body parser url-encoded bodies and at the end it will execute next()
app.use(express.static(path.join(__dirname, 'public '))); //STATIC middleware folder that we need to grant read access publically

//Routers
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Page Not Found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

//Server Configuration
app.listen(3000);