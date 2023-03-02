const { readJSON, writeJSON } = require("../data");
const fs = require("fs");

const products = readJSON("productsDataBase.json");

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
        let search = req.query.search;
        let searchResult = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()));
        res.render("main/results", { searchResult, search, toThousand, style: "styles.css" })
    }

};