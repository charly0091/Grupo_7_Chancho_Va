module.exports = {
    // de momento solo existe detail y carrito
    
    products: (req, res) => {
        res.render("products")
    },
    detail: (req, res) => {
        res.render("products/detalleProducto" , { style : "detalleProducto.css" } )
    },
    create: (req, res) => {
        res.render("create")
    },
    edit: (req, res) => {
        res.render("edit")
    },
    carrito: (req, res) => {
        res.render("products/carrito" , { style : "Carrito.css" })
    }

}