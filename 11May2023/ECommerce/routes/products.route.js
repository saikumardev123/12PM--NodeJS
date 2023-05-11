var express = require("express");
var productRouter = express.Router();
var ProductController = require("../controllers/product.controller");

productRouter.post("/addProduct", ProductController.addProduct);
productRouter.get("/products", ProductController.getAllProducts);
productRouter.put("/product/:id", ProductController.updateProduct);
productRouter.delete("/product/:id", ProductController.deleteProduct);
module.exports = productRouter;