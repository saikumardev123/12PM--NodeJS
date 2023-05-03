var express = require('express');
var app = express();
app.use(express.json());
var userRoute = require('./routes/user.route');
var productRoute = require('./routes/product.route');
app.use('/users', userRoute);
app.use('/products', productRoute);
app.listen(9011, () => {
    console.log("server started!");
})