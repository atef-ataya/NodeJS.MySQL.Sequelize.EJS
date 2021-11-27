//Core Module Specific Modules
const path = require('path');

//Third Party Packages
const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');

const app = express(); //request handler

//app.engine('hbs', expressHbs({ layoutDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' })); //HandleBars is not built in engine
//app.set('view engine', 'pug'); //Global Configuration Value, a value that can't understand, pug built-in template
app.set('view engine', 'ejs'); //Global Configuration Value, a value that can't understand, pug built-in template
app.set('views', 'views');

//My Own File/Packages
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Middlewares
app.use(bodyParser.urlencoded({ extended: false })); //middleware body parser url-encoded bodies and at the end it will execute next()
app.use(express.static(path.join(__dirname, 'public'))); //STATIC middleware folder that we need to grant read access publically

//Routers
app.use('/admin', adminData.routes);
app.use(shopRoutes);

//Page Not Found
app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', { pageTitle: 'Page Not Found!' });
});

//Server Configuration
app.listen(3000);