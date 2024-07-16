const express = require("express");
const route = express.Router();
const userController = require("../controllers/userControl");

route.post("/signup", userController.signUp);
route.post("/signin", userController.signIn);
route.post("/signout", userController.signOut);
route.get("/all", userController.getAllUser);

module.exports = route;
