var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {
        username: {
            type: String
        },
        password: {
            type: String,
        },
        emailId: {
            type: String
        }

    }
);
module.exports = new mongoose.model('User', userSchema);