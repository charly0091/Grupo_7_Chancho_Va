const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

router.get("/createProduct", controller.create);
router.get("/editProduct", controller.edit);
router.post("/createProduct", controller.store);
router.post("/editProduct", controller.edit);

module.exports = router;