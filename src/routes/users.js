const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");

router.get("/", controller.users); 
router.get("/register", controller.register);
router.post("/", controller.crear);
router.get("/login", controller.login);
router.get("/reset-password", controller.resetPassword);
router.get("/metodosDePago", controller.metodosDePago);
router.get("/pagoTargeta", controller.pago)

module.exports = router;