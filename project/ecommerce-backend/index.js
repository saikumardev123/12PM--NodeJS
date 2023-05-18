const express = require('express');
const dotenv = require('dotenv');
const app = express();
const db = require('./utils/db');
const UserRouter = require('./routes/user.route');
const ProductRouter = require('./routes/product.route');
dotenv.config();
db.connect();
app.use(express.json());
app.use('/user', UserRouter);
app.use('/product', ProductRouter);

app.listen(process.env.PORT_NO, () => {
    console.log("The server running on PORT", process.env.PORT_NO)
});
