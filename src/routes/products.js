const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

router.get("/", controller.products); 
router.get("/detail", controller.detail);

router.get("/carrito", controller.carrito);



module.exports = router;