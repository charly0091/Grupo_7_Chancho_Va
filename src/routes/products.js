const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const userInSessionState = require("../middlewares/userInSessionState")

router.get("/detail/:id", controller.detail);
router.get("/carrito",userInSessionState, controller.carrito);
router.get("/familiares", controller.familiares);
router.get("/estrategia", controller.estrategia);
router.get("/previa", controller.previa);
router.get("/image/:id", controller.image);
router.get("/ofertas", controller.ofertas);
router.get("/productsList", controller.productsList);

module.exports = router;