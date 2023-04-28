var express = require('express');
var cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors());

app.listen(9012, function () {
    console.log("server started at 9012!");
})
var products = [
    {
        id: 101,
        name: "product 1",
        price: 200
    },
    {
        id: 102,
        name: "product 2",
        price: 200
    },
    {
        id: 103,
        name: "product 3",
        price: 200
    }
];
// GET - used to get the data 
app.get("/products", function (req, res) {

    console.log("/products API call is hit");

    res.send(products);
});

app.post('/product', function (req, res) {
    console.log(req.body);
    products.push(req.body);
    res.send({
        message: "product added successfully!"
    })
})

app.delete("/product/:productId", function (req, res) {
    console.log(req.params);
    var pid = req.params.productId;
    console.log(pid);

    products.forEach((product, i) => {
        if (product.id == pid) {
            products.splice(i, 1);
            res.send({ message: "deleted successfully" });
        }
    })

})

app.put('/product', function (req, res) {
    var productFromUser = req.body;
    products.forEach(product => {
        if (product.id == productFromUser.id) {
            product.name = productFromUser.name;
            product.price = productFromUser.price;
            res.send({ message: "product update successful" });
        }
    })
})
