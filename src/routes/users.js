const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");
const loginValidator = require("../validations/loginValidation");
const uploadImageUser = require("../middlewares/uploadImageUser");
const registerValidator = require("../validations/registerValidation")


router.get("/", controller.users); 
/* Registro */
router.get("/register", controller.register);
router.post("/register", uploadImageUser.single("imagen"), registerValidator, controller.crearUsuario);
router.get("/login" , controller.login);
router.post("/login",loginValidator, controller.processLogin);
router.get("/logout" , controller.logout);
router.get("/reset-password", controller.resetPassword);
router.get("/metodosDePago", controller.metodosDePago);
router.get("/pagoTarjeta", controller.pago)

module.exports = router;