const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");
const cookieCheck = require("../middlewares/cookieCheck");

router.get("/", cookieCheck , controller.main); 
router.get("/about", controller.about);
router.get("/terms", controller.terms);
router.get("/help", controller.help);
router.get("/construccion", controller.construccion);
router.get("/contact", controller.contact);
router.get("/search", controller.search);


module.exports = router;