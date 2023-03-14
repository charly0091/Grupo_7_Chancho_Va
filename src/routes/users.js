const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");

router.get("/", controller.users); 
/* Registro */
router.get("/register", controller.register);
router.post("/register", controller.crearUsuario);
router.get("/login", controller.login);
router.get("/reset-password", controller.resetPassword);
router.get("/metodosDePago", controller.metodosDePago);
router.get("/pagoTarjeta", controller.pago)

module.exports = router;