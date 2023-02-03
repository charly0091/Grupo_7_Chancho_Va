module.exports = {
    // de momento solo existe detail y carrito
    
    products: (req, res) => {
        res.render("products")
    },
    detail: (req, res) => {
        res.render("detail")
    },
    create: (req, res) => {
        res.render("./admin/createProduct")
    },
    edit: (req, res) => {
         res.render("./admin/editProduct")
    },
    carrito: (req, res) => {
        res.render("carrito")
    }

}