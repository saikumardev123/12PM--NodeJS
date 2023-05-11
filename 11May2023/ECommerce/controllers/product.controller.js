var ProductModel = require('../model/Product');

exports.addProduct = async function (req, res) {
    console.log(req.body);
    var product = req.body;
    var ProductModelObject = ProductModel(product);
    var response = await ProductModelObject.save();
    console.log(response);
    res.send(response);
}

exports.getAllProducts = async function (req, res) {
    var response = await ProductModel.find();
    res.send(response);
}
exports.updateProduct = async function (req, res) {
    var _id = req.params.id;
    var body = req.body;
    var response = await ProductModel.findOneAndUpdate({ _id: _id }, body);
    res.send(response);
}

exports.deleteProduct = async function (req, res) {
    var _id = req.params.id;
    var response = await ProductModel.findOneAndDelete({ _id: _id });
    res.send(response);
}
