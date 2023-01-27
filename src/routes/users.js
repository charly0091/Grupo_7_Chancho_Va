const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");

router.get("/", controller.users); 
router.get("/register", controller.register);
router.get("/login", controller.login);
router.get("/reset-password", controller.resetPassword);

module.exports = router;