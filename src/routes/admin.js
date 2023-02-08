const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");
// Crear Producto
router.get("/createProduct", controller.create);
router.post("/createProduct", controller.store);
// Editar Producto
router.get("/editProduct", controller.edit);
router.post("/editProduct", controller.edit);
// Perfil de Administrador
router.get("/adminPerfil", controller.admin)

module.exports = router;