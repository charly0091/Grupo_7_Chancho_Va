const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    products: (req, res) => {
        res.render("products")
    },
    /* detail: (req, res) => {
        res.render("products/detail" , { style : "detail.css" } )
    }, */
    detail: (req, res) => {
        let product = products.find(product => product.id == req.params.id);
        let categoriasId = products.filter(categorias => categorias.subCategory === "in-sale");
        categoriasId.length = 6 
        let categoriasId2 = products.filter(categorias => categorias.subCategory === "visited");
        categoriasId2.length = 6 
        res.render("products/detail", { product, style : "detail.css" , toThousand, categoriasId, categoriasId2});
    },
    create: (req, res) => {
        res.render("./admin/createProduct")
    },
    edit: (req, res) => {
         res.render("./admin/editProduct")
    },
    carrito: (req, res) => {
        res.render("products/carrito" , { style : "carrito.css" })
    }
 
    }



module.exports = controller;