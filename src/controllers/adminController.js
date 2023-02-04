module.exports = {
create: (req, res) => {
    res.render("./admin/createProduct" , { style : "styles.css" })
},
edit: (req, res) => {
     res.render("./admin/editProduct" , { style : "styles.css" })

}



}