const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const userInSessionState = require("../middlewares/userInSessionState");
const userSessionState = require("../middlewares/userSessionState");
const adminSessionState = require("../middlewares/adminSessionState");


router.get("/", controller.products); 
router.get("/detail", controller.detail);
router.get("/detail/:id", controller.detail);
router.get("/create", adminSessionState , controller.create);
router.get("/edit",  adminSessionState ,controller.edit);
router.put("/edit/:id", adminSessionState , controller.edit);
router.get("/carrito", userInSessionState, controller.carrito);
router.get("/familiares", controller.familiares);
router.get("/estrategia", controller.estrategia);
router.get("/previa", controller.previa);
router.delete("/delete/:id", adminSessionState, controller.destroy);


module.exports = router;