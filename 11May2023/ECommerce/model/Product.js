var mongoose = require('mongoose');

var productSchema = new mongoose.Schema(
    {
        pid: {
            type: Number
        },
        name: {
            type: String,
        },
        description: {
            type: String
        },
        imageUrl: {
            type: String
        },
        price: {
            type: Number
        },
        quantity: {
            type: Number
        },
        seller: {
            type: String
        }
    }
);
module.exports = new mongoose.model('Product', productSchema);


