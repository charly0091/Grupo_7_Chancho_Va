const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");
const { uploadImageProduct } = require('../middlewares/upload');
const productValidator = require('../validations/productAddValidator');
const adminSessionState = require('../middlewares/adminSessionState');
const perfilEditValidator = require("../validations/editUserValidator");
const uploadImageUser = require("../middlewares/uploadImageUser");

// Productos
router.get("/products",adminSessionState, controller.products);
router.delete("/delete/:id", controller.delete);

// Crear Producto
router.get("/createProduct",adminSessionState, controller.create);
router.post("/createProduct", uploadImageProduct.single('productPhoto'), productValidator, controller.store);

// Editar Producto
router.get("/editProduct/:id",adminSessionState, controller.edit);
router.put("/editProduct/:id", uploadImageProduct.single("productPhoto"), productValidator , controller.update);

// Perfil de Administrador
router.get("/adminPerfil",adminSessionState, controller.admin)
router.get("/adminPerfilUsers",adminSessionState, controller.adminUsersRegister)
router.get("/adminPerfilQuestions",adminSessionState, controller.adminUsersQuestions)
router.get("/adminPerfilShipments",adminSessionState, controller.adminUsersShipments)
router.get("/adminPerfilReturnedPackages",adminSessionState, controller.adminPerfilReturnedPackages)
router.get("/adminPerfilClaims",adminSessionState, controller.adminPerfilClaims)
router.get("/userEdit/:id",adminSessionState, controller.userEdit)
router.delete("/userDelete/:id", controller.userDelete)

// Editar Perfil Administrador
router.get("/adminPerfilEdit/:id",adminSessionState, perfilEditValidator, controller.editRender)
router.put("/adminPerfilEdit/:id",uploadImageUser.single("productPhoto") ,controller.editAdmin)

module.exports = router;