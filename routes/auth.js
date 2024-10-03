const express = require("express");
const router = express.Router();
const AuthenticationController = require("../controller/Authentication.controller");

router.post("/login", AuthenticationController.login);
router.post("/register", AuthenticationController.signUp);

module.exports = router;
