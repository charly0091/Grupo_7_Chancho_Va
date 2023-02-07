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
        res.render("products/detail", { product, style : "detail.css" , toThousand});
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