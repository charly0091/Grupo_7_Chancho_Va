const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");
const loginValidator = require("../validations/loginValidation");
const userInSessionState = require("../middlewares/userInSessionState");
const userSessionState = require("../middlewares/userSessionState");


router.get("/", controller.users); 
router.get("/register",userSessionState, controller.register);
router.post("/register", controller.crear);
router.get("/login" ,userSessionState, controller.login);
router.post("/login",loginValidator, controller.processLogin);
router.get("/logout" ,userInSessionState, controller.logout);
router.get("/reset-password",userInSessionState, controller.resetPassword);
router.get("/metodosDePago",userInSessionState, controller.metodosDePago);
router.get("/pagoTarjeta",userInSessionState, controller.pago);
router.get("/profile",userInSessionState, controller.userProfile);
router.get("/editUserProfile",userInSessionState, controller.editUserProfile);
router.put("/userProfile", controller.editProfile);
router.delete("/deleteProfile/:id",userInSessionState, controller.deleteProfile);


module.exports = router;