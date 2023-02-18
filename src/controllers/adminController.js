const fs = require('fs');
const path = require('path');

const productDataPath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productDataPath, "utf-8"));
const writeJson = (products) => {
    fs.writeFileSync(productDataPath, JSON.stringify(products), "utf8")
}

//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = {
    create: (req, res) => {
        res.render("admin/createProduct")
    },

    store: (req, res) => {
        let lastId = products [products.length -1].id;
		let newProduct ={
			id:lastId+1,
			name:req.body.productName,
			price:req.body.productPrice,
			category:req.body.productCategory,
			description:req.body.productDescription,
            image:req.body.productPhoto,
		}
		products.push(newProduct);
		writeJson(products)
    },

    edit: (req, res) => {
		let productId = Number(req.params.id);
		let productToEdit = products.find(product => product.id === productId);

		res.render("admin/editProduct", {
			productToEdit, 
		})
	},

    admin: (req, res) =>{
        res.render("./admin/adminPerfil")
    },

    editRender: (req, res) =>{
        res.render("./admin/adminPerfilEdit")
    },

    editAdmin: (req, res) =>{
        res.render("./admin/adminPerfilEdit")
    },

    adminUsersRegister: (req, res) =>{
        res.render("./admin/adminPerfilUsers")
    },

    adminUsersQuestions: (req, res) =>{
        res.render("./admin/adminPerfilQuestions")
    },

    adminUsersShipments: (req, res) =>{
        res.render("./admin/adminPerfilShipments")
    },

    adminPerfilReturnedPackages: (req, res) =>{
        res.render("./admin/adminPerfilReturnedPackages")
    },

    adminPerfilClaims: (req, res) =>{
        res.render("./admin/adminPerfilClaims")
    },
}