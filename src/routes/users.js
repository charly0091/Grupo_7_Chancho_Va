const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");
const loginValidator = require("../validations/loginValidation");
const uploadImageUser = require("../middlewares/uploadImageUser");
const registerValidator = require("../validations/registerValidation")
const userSessionState = require("../middlewares/userSessionState");
const userInSessionState = require("../middlewares/userInSessionState");
const editUserValidator = require("../validations/editUserValidator");
const deleteAccountValidator = require("../validations/deleteAccountValidator");


router.get("/", controller.users); 
/* Registro */
router.get("/register",userSessionState, controller.register);
router.post("/register", uploadImageUser.single("imagen"), registerValidator, controller.crearUsuario);

router.get("/login" ,userSessionState, controller.login);
router.post("/login",loginValidator, controller.processLogin);

router.get("/logout" , controller.logout);
router.get("/metodosDePago",userInSessionState, controller.metodosDePago);
router.get("/pagoTarjeta",userInSessionState, controller.pago);
router.get("/profile",userInSessionState, controller.userProfile);

router.get("/editUserProfile",userInSessionState,editUserValidator, controller.editUserProfile);
router.put("/editUserProfile/:id",uploadImageUser.single("productPhoto"), controller.editUser);

router.get("/userPerfilShipments",userInSessionState, controller.usersShipments);
router.get("/userReturnedPackages",userInSessionState, controller.userReturnedPackages);
router.get("/userClaims",userInSessionState, controller.userClaims);

router.get("/deleteAccount", controller.deleteAccount);
router.delete("/delete/:id", deleteAccountValidator, controller.deleteUserProfile);

router.get("/image/:id", controller.image);

//router.get("/reset-password",userInSessionState, controller.resetPassword);
//router.put("/reset-password/:id", controller.processChangePassword);



module.exports = router;