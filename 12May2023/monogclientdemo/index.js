var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    console.log("connecting...")
    if (err) {
        console.log(err);
    }
    if (db) {
        var dbo = db.db('ecommerce');
        dbo.collection('products').insertOne(
            {
                "pid": 107,
                "name": "product 7",
                "description": "description 8",
                "imageUrl": "fghvjb",
                "price": 1900,
                "quantity": 3,
                "seller": "RetailNetfgchj"
            },
            function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                }
            }
        )
    }
});
