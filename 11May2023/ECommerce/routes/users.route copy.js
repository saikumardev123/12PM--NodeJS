var express = require("express");
var categoryRouter = express.Router();
var CategoryController = require("../controllers/category.controller");

userRouter.post("/category", CategoryController.addCategory);
userRouter.get("/categories", CategoryController.getAllcategories);
userRouter.put("/category/:id", CategoryController.updateCategory);
userRouter.delete("/category/:id", CategoryController.deleteCategory);
module.exports = categoryRouter;