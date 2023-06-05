const {Product}  = require("../database/models");
const {Op} = require("sequelize");

module.exports = {
    
    main: (req, res) => {
        
        let inSale = Product.findAll({
            where: {
                subCategory_id: 1
            }
        })
        let visited = Product.findAll({
            where: {
                subCategory_id: 2
            }
        })
        Promise.all([inSale, visited])
        .then(([inSale,visited]) => {
            res.render("main/home", {
                inSale,
                visited, 
                style: "styles.css",
                session: req.session
            })
        })
        .catch(error => res.send(error))
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
        let searchResult = Product.findAll({
            where: {
                name: {[Op.like]: `%${search}%`}
            }
        })
        Promise.all([searchResult])
        .then(([searchResult]) => {
            if(searchResult.length != 0){
                res.render("main/results", { 
                    searchResult, 
                    style: "styles.css" , 
                    session: req.session
                })
            } else {
                res.send("No hay resultados para tu busqueda")
            }
        })
        .catch(error => res.send(error))
    },
    error: (req, res) => {
        res.render("main/error" , { style : "error.css", session: req.session })
}

};