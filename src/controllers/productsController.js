const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const { writeJSON } = require("../data");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    products: (req, res) => {
        res.render("products/products", { products, toThousand, session: req.session })
    },
    detail: (req, res) => {
        let product = products.find(product => product.id == req.params.id);
        let categoriasId = products.filter(categorias => categorias.subCategory === "in-sale");
        categoriasId.length = 6 
        let categoriasId2 = products.filter(categorias => categorias.subCategory === "visited");
        categoriasId2.length = 6 
        res.render("products/detail", { product, style : "detail.css" , toThousand, categoriasId, categoriasId2, session: req.session})
    },
/*     create: (req, res) => {
        res.render("./admin/createProduct" , { style : "createProduct.css"})
    },
    edit: (req, res) => {
         res.render("./admin/editProduct" , { style : "editProduct.css"}) 
    }, */
    carrito: (req, res) => {
        res.render("products/carrito" , { style : "carrito.css" , session: req.session})
    },
    familiares: (req, res) => {
        let categoriasFamiliares = products.filter(categorias => categorias.category === 1);
        res.render("products/familiares" , { style : "familiares.css", categoriasFamiliares , session: req.session})
    },
    estrategia: (req, res) => {
        let categoriasEstrategia = products.filter(categorias => categorias.category === 3);
        res.render("products/estrategia" , { style : "estrategia.css", categoriasEstrategia , session: req.session})
    },
    previa: (req, res) => {
        let categoriasPrevia = products.filter(categorias => categorias.category === 2);
        res.render("products/previa" , { style : "previa.css", categoriasPrevia , session: req.session})
    }
}



module.exports = controller;