/*const {Product} = require("../../database/models");

module.exports = {
    allProducts: (req, res) => {
        Product.findAll()
        .then(products => {
            return res.json(products);
        })
    },
    detail: (req, res) => {
        Product.findByPk(req.params.id)
        .then(product => {
            res.json(product)
        })
    }
}*/