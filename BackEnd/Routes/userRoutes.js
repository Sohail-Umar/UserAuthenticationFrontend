const express = require("express");
const userControllers = require("../Controllers/userController")

const router = express.Router()

router.get("/", userControllers.userGetController)

router.post("/signup", userControllers.userSignUpController)

router.post("/signin", userControllers.userSignInController)

module.exports = router