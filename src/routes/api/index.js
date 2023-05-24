const express = require("express");
const router = express.Router();
/* const { list, detail } = require("../../controllers/api/categoriesController"); */
const { getAll, getOne, store, update, destroy } = require("../../controllers/api/productsController");
const { usersList, usersDetail } = require("../../controllers/api/usersController");

// Categories
router
/*     .get("/category", list)
    .get("/category/:id", detail) */
//Products
    .get("/products", getAll)
    .get("/products/:id", getOne)
    .post("/product", store)
    .put("/product/:id", update)
    .delete("/product/:id", destroy)
//Users
    .get("/users", usersList)
    .get("/users/:id", usersDetail)

module.exports = router;