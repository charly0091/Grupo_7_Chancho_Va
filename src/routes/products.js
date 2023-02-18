const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

router.get("/", controller.products); 
router.get("/detail", controller.detail);
router.get("/detail/:id", controller.detail);
router.get("/create", controller.create);
router.get("/edit", controller.edit);
router.get("/carrito", controller.carrito);
router.get("/familiares", controller.familiares);
router.get("/estrategia", controller.estrategia);
router.get("/previa", controller.previa);



module.exports = router;