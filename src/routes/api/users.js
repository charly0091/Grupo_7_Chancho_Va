const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/users");

router.get("/list", controller.usersList);

module.exports = router;