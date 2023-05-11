var express = require("express");
var userRouter = express.Router();
var UserController = require("../controllers/user.controller");

userRouter.post("/addUser", UserController.addUser);
userRouter.get("/users", UserController.getAllUsers);
userRouter.put("/user/:id", UserController.updateUser);
userRouter.delete("/user/:id", UserController.deleteUser);

module.exports = userRouter;