const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const userInSessionState = require("../middlewares/userInSessionState")

router.get("/detail/:id", controller.detail);
router.get("/carrito",userInSessionState, controller.carrito);
router.get("/familiares", controller.familiares);
router.get("/estrategia", controller.estrategia);
router.get("/previa", controller.previa);

module.exports = router;