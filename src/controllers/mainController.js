const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    
    main: (req, res) => {
        let categoriasId = products.filter(categorias => categorias.subCategory === "in-sale");
        let categoriasId2 = products.filter(categorias => categorias.subCategory === "visited");
        res.render("main/home",{style: "home.css", categoriasId, categoriasId2})
    },
    about: (req, res) => {
        res.render("main/about" , { style : "styles.css" })
    },
    terms: (req, res) => {
        res.render("main/terms" , { style : "styles.css" })
    },
    help: (req, res) => {
        res.render("main/help" , { style : "styles.css" })
    },
    construccion: (req, res) => {
        res.render("main/construccion" , { style : "styles.css" })
    },
  
    contact: (req, res) => {
        res.render("main/contact" , { style : "styles.css" })
    },

    search: (req, res) => {
        let resultado = products.filter(producto => producto.name.toLowerCase().includes(req.query.keywords.toLowerCase()));
        res.render("main/results", {resultado, toThousand})
    }
}