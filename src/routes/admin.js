const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");
// Crear Producto
router.get("/createProduct", controller.create);
router.post("/products", controller.store);
// Editar Producto
router.get("/editProduct/:id", controller.edit);
router.put("/editProduct/:id", controller.update);
// Perfil de Administrador
router.get("/adminPerfil", controller.admin)
router.get("/adminPerfilUsers", controller.adminUsersRegister)
router.get("/adminPerfilQuestions", controller.adminUsersQuestions)
router.get("/adminPerfilShipments", controller.adminUsersShipments)
router.get("/adminPerfilReturnedPackages", controller.adminPerfilReturnedPackages)
router.get("/adminPerfilClaims", controller.adminPerfilClaims)

// Editar Perfil Administrador
router.get("/adminPerfilEdit", controller.editRender)
router.put("/adminPerfil", controller.editAdmin)

module.exports = router;