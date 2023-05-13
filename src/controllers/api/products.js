const {Product} = require("../../database/models");

module.exports = {
    detail: (req, res) => {
        Product.findByPk(req.params.id)
        .then(product => {
            res.json(product)
        })
    }
}