var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema(
    {
        catId: {
            type: Number
        },
        name: {
            type: String,
        },
        logo: {
            type: String
        }

    }
);
module.exports = new mongoose.model('Category', categorySchema);