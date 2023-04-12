const { readJSON, writeJSON } = require("../old-database");


const products = readJSON("productsDataBase.json");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    
    main: (req, res) => {
        let categoriasId = products.filter(categorias => categorias.subCategory === "in-sale");
        let categoriasId2 = products.filter(categorias => categorias.subCategory === "visited");
        res.render("main/home",{style: "home.css", categoriasId, categoriasId2, session: req.session})
    },
    about: (req, res) => {
        res.render("main/about" , { style : "styles.css", session: req.session })
    },
    terms: (req, res) => {
        res.render("main/terms" , { style : "styles.css", session: req.session })
    },
    help: (req, res) => {
        res.render("main/help" , { style : "styles.css", session: req.session })
    },
    construccion: (req, res) => {
        res.render("main/construccion" , { style : "styles.css", session: req.session })
    },
  
    contact: (req, res) => {
        res.render("main/contact" , { style : "styles.css", session: req.session })
    },
    search: (req, res) => {
        let search = req.query.search;
        let searchResult = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()));
        res.render("main/results", { searchResult, search, toThousand, style: "styles.css" , session: req.session })
    }

};