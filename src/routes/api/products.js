const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/products");

router.get("/", controller.allProducts)
router.get("/:id", controller.detail);

module.exports = router;