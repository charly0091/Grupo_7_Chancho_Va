const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../old-database");
const fs = require("fs");
const products = readJSON("productsDataBase.json");
const categories = readJSON("categories.json");
const subCategories = readJSON("subCategories.json");

module.exports = {
    products: (req, res) => {
        res.render("admin/products", { products, session: req.session })
    },
    delete: (req, res) => {
        let productId = Number(req.params.id);
        let newProductsArray = products.filter(product => product.id !== productId)
        writeJSON("productsDataBase.json", newProductsArray)
        res.redirect("/admin/products");
    },
    create: (req, res) => {
        res.render("admin/createProduct", {
            categories,
            subCategories,
            session: req.session
        })
    },
    store: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let lastId = products[products.length - 1].id;
            let newProduct = {
                id: lastId + 1,
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                category: req.body.category,
                subCategory: req.body.subCategory,
                description: req.body.description,
                image: req.file ? req.file.filename : null,
            }
            products.push(newProduct);
            writeJSON("productsDataBase.json", products)
            res.redirect("/admin/adminPerfil");
        } else {
            res.render("admin/createProduct", {
                categories,
                subCategories,
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    edit: (req, res) => {
        let productId = Number(req.params.id);
        let productToEdit = products.find(product => product.id === productId);
        if (productToEdit) {
            res.render("admin/editProduct", {
                productToEdit,
                categories,
                subCategories,
                session: req.session
            })
        } else {
            res.send("No se encontro el producto");
        }
    },
    update: (req, res) => {
        let errors = validationResult(req);
        if (req.fileError) {
            errors.errors.push({ msg: req.fileError })
        }
        if (errors.isEmpty()) {
            let productId = Number(req.params.id);
            let productToEdit = products.find(product => product.id == productId);
            productToEdit.id = productId;
            productToEdit.name = req.body.name;
            productToEdit.price = req.body.price;
            productToEdit.discount = req.body.discount;
            productToEdit.category = req.body.category;
            productToEdit.subCategory = req.body.subCategory;
            productToEdit.description = req.body.description;
            req.body.oldImage = productToEdit.image;
            productToEdit.image = req.file ? req.file.filename : null;
            if (productToEdit.image == null) {
                productToEdit.image = req.body.oldImage;
            } else {
                fs.existsSync(`public/images/${req.body.oldImage}`) && fs.unlinkSync(`public/images/${req.body.oldImage}`);
            }
            writeJSON("productsDataBase.json", products);
            res.redirect("/admin/adminPerfil");
        } else {
            let productId = Number(req.params.id);
            let productToEdit = products.find(product => product.id === productId);
            if (productToEdit) {
                res.render("admin/editProduct", {
                    productToEdit,
                    categories,
                    subCategories,
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session
                })
            } else {
                res.send("No se encontro el producto");
            }
        }
    },
    admin: (req, res) => {
        res.render("./admin/adminPerfil", { session: req.session })
    },
    editRender: (req, res) => {
        res.render("./admin/adminPerfilEdit", { session: req.session })
    },
    editAdmin: (req, res) => {
        res.render("./admin/adminPerfilEdit", { session: req.session })
    },
    adminUsersRegister: (req, res) => {
        res.render("./admin/adminPerfilUsers", { session: req.session })
    },
    adminUsersQuestions: (req, res) => {
        res.render("./admin/adminPerfilQuestions", { session: req.session })
    },
    adminUsersShipments: (req, res) => {
        res.render("./admin/adminPerfilShipments", { session: req.session })
    },
    adminPerfilReturnedPackages: (req, res) => {
        res.render("./admin/adminPerfilReturnedPackages", { session: req.session })
    },
    adminPerfilClaims: (req, res) => {
        res.render("./admin/adminPerfilClaims", { session: req.session })
    },
}