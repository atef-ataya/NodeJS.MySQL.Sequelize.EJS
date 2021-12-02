//Core Module
const path = require('path');

// Third Party Module
const express = require('express');
const bodyParser = require('body-parser');

//My Module
const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

//Express Framework
const app = express();

//Template Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Middlewares
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((error) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

//DEFINE ASSOCIATION
//Products Created by user, if the user is deleted the products will be deleted
//One direction of association is enought, but you can add the reverse association
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
  //.sync({ force: true }) //only in development to reflect changes & associations
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: 'Atef', email: 'atef@gmail.com' });
    }
    return user;
  })
  .then((user) => {
    //console.log(user);
    user.createCart();
  })
  .then((cart) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
