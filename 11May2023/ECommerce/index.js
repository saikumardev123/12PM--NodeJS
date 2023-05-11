var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var UserRouter = require('./routes/users.route');
var ProductRouter = require('./routes/products.route');
var app = express();
app.use(express.json());
app.use(cors());
app.use(UserRouter);
app.use(ProductRouter);
mongoose.connect("mongodb://localhost/ecommerce").then(
    (response) => {
        console.log("connected to DB");
    },
    (error) => {
        console.log(error);
    }
)
app.listen('9012', () => {
    console.log("server started!");
})