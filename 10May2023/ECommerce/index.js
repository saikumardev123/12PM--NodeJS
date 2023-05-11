var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors());

var UserModel = require('./model/User');

mongoose.connect("mongodb://localhost/ecommerce").then(
    (response) => {
        console.log("connected to DB");
    },
    (error) => {
        console.log(error);
    }
)

app.post("/addUser", async function (req, res) {
    console.log(req.body);
    var user = req.body;
    var UserModelObject = UserModel(user);
    var response = await UserModelObject.save();
    console.log(response);
    res.send(response);
})

app.get("/users", async function (req, res) {
    var response = await UserModel.find();
    res.send(response);
})

app.put("/user/:id", async function (req, res) {
    var _id = req.params.id;
    var body = req.body;
    var response = await UserModel.findOneAndUpdate({ _id: _id }, body);
    res.send(response);
})

app.delete("/user/:id", async function (req, res) {
    var _id = req.params.id;
    var response = await UserModel.findOneAndDelete({ _id: _id });
    res.send(response);
})

app.listen('9012', () => {
    console.log("server started!");
})