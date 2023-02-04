const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

router.get("/", controller.products); 
<<<<<<< HEAD
router.get("/detail", controller.detail);

=======
router.get("/detail/:id", controller.detail);
router.get("/create", controller.create);
router.get("/edit", controller.edit);
>>>>>>> e3cedb238e2bc5846f833c4ad31a162ddcba9498
router.get("/carrito", controller.carrito);



module.exports = router;