var UserModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
exports.register = async (req, res) => {
    var user = req.body;
    user.password = bcrypt.hashSync(req.body.password);
    console.log("user", user);
    var UserModelObject = new UserModel(user);
    try {
        var response = await UserModelObject.save(user);
        if (response instanceof Error) {
            res.status(500).send({
                statusCode: 500,
                message: "Registration failure"
            })
        }
        else {
            res.status(201).send({
                statusCode: 201,
                message: "Registration success"
            })
        }
    }
    catch (error) {
        console.log(error);
    }
}