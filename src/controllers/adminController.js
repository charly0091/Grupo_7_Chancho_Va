const fs = require('fs');
const path = require('path');

const productDataPath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productDataPath, "utf-8"));
const writeJson = (products) => {
    fs.writeFileSync(productDataPath, JSON.stringify(products), "utf8")
}


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

        if(productToEdit){
            res.render("admin/editProduct", {
                productToEdit, 
            })
        } else{
            res.send("No se encontro el producto");
        }
	},
    update: (req, res) => {
        let productId = Number(req.params.id);
        let productToEdit = products.find(product => product.id == productId);
        productToEdit.id = productId;
        productToEdit.name = req.body.name;
        productToEdit.price = req.body.price;
        productToEdit.discount = req.body.discount;
        productToEdit.category = req.body.category;
        productToEdit.description = req.body.description;
        productToEdit.image = req.body.image;
        
        writeJson(products);
        res.redirect("/admin/adminPerfil");



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