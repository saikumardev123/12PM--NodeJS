var express = require('express');

var router = express.Router();

router.get('/list', function (req, res) {
    res.send([
        {
            id: 101,
            name: "kiran",
            address: "hyd"
        },
        {
            id: 102,
            name: "rajesh",
            address: "banglore"
        }]
    )
});

router.post("/login", function (req, res) {
    var user = req.body;

    if (user.username == "sai" && user.password == "kumar") {
        console.log("login success");
        res.send({
            status: 200,
            result: true
        })
    }
    else {
        console.log("login failed");
        res.send({
            status: 500,
            result: false
        })
    }
})

module.exports = router;