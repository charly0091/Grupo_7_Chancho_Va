const fs = require('fs');
const path = require('path');

//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = {
create: (req, res) => {
    res.render("./admin/createProduct" , { style : "styles.css" })
},
edit: (req, res) => {
     res.render("./admin/editProduct" , { style : "styles.css" })

}



}