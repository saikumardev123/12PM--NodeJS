var express = require('express');
var router = express.Router();
var products = [
    {
        pid: 101,
        name: "product 1",
        price: 2000
    },
    {
        pid: 102,
        name: "product 2",
        price: 12000
    }];
router.get('/list', function (req, res) {

    res.send(products)
});

// /product/101
router.get("/product/:productId", function (req, res) {

    try {
        var pid = req.params.productId;
        var requiredProduct = {};
        products.forEach(product => {
            if (product.pid == pid) {
                requiredProduct = product;
                return;
            }
        })
    } catch (error) {
        console.log(error);
    }
    return res.send(requiredProduct);
})

module.exports = router;


//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