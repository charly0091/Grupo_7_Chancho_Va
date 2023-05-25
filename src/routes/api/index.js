const express = require("express");
const router = express.Router();
/* const { list, detail } = require("../../controllers/api/categoriesController"); */
const { getAll, getOne, store, update, destroy, pagedProducts} = require("../../controllers/api/productsController");
const { usersList, usersDetail, pagedUsers } = require("../../controllers/api/usersController");

// Categories
router
/*     .get("/category", list)
    .get("/category/:id", detail) */
//Products
    //.get("/products", getAll)
    .get("/products/:id", getOne)
    .post("/product", store)
    .put("/product/:id", update)
    .delete("/product/:id", destroy)
    .get("/products", pagedProducts)
//Users
    //.get("/users", usersList)
    .get("/users/:id", usersDetail)
    .get("/users", pagedUsers)

module.exports = router;