const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");
const loginValidator = require("../validations/loginValidation");
const uploadImageUser = require("../middlewares/uploadImageUser");
const registerValidator = require("../validations/registerValidation")
const userSessionState = require("../middlewares/userSessionState");
const userInSessionState = require("../middlewares/userInSessionState")


router.get("/", controller.users); 
/* Registro */
router.get("/register",userSessionState, controller.register);
router.post("/register", uploadImageUser.single("imagen"), registerValidator, controller.crearUsuario);
router.get("/login" ,userSessionState, controller.login);
router.post("/login",loginValidator, controller.processLogin);
router.get("/logout" , controller.logout);
router.get("/reset-password",userInSessionState, controller.resetPassword);
router.get("/metodosDePago",userInSessionState, controller.metodosDePago);
router.get("/pagoTarjeta",userInSessionState, controller.pago)

module.exports = router;