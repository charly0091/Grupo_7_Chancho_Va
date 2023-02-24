const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../data");
const fs = require("fs");

const products = readJSON("productsDataBase.json");
const categories = readJSON("categories.json");
const subCategories = readJSON("subCategories.json");


module.exports = {
    products: (req, res) => {
        res.render("admin/products",{products})
    },

    delete:(req, res) => {
        let productId = Number(req.params.id); 
        let newProductsArray = products.filter(product => product.id !== productId)
        writeJSON("productsDataBase.json", newProductsArray)
        res.send("El producto fue destruido")
    },

    create: (req, res) => {
        res.render("admin/createProduct")
    },
            

    store: (req, res) => {
        let lastId = products [products.length -1].id;
		let newProduct ={
			id:lastId+1,
			name:req.body.productName,
			price:req.body.productPrice,
            discount:req.body.productDiscount,
			category:req.body.productCategory,
            subCategory:req.body.productSubCategory,
			description:req.body.productDescription,
            image : req.file ? req.file.filename : null,

		}
		products.push(newProduct);
		writeJSON("productsDataBase.json", products)
        res.redirect("/admin/adminPerfil");
    },

    edit: (req, res) => {
		let productId = Number(req.params.id);
		let productToEdit = products.find(product => product.id === productId);

        if(productToEdit){
            res.render("admin/editProduct", {
                productToEdit, 
                categories,
                subCategories
            })
        } else{
            res.send("No se encontro el producto");
        }
	},
    update: (req, res) => {
        let errors = validationResult(req);

        if(req.fileError){
            errors.errors.push({msg: req.fileError})
        }

        if(errors.isEmpty()){


        let productId = Number(req.params.id);
        let productToEdit = products.find(product => product.id == productId);
        productToEdit.id = productId;
        productToEdit.name = req.body.name;
        productToEdit.price = req.body.price;
        productToEdit.discount = req.body.discount;
        productToEdit.category = req.body.category;
        productToEdit.subCategory = req.body.subCategory;
        productToEdit.description = req.body.description;
        productToEdit.image = req.file ? req.file.filename : productToEdit.image;

        if(productToEdit.image == null){
            productToEdit.image = req.body.oldImage;
        } else{
            fs.existsSync(`public/images/${req.body.oldImage}`) && fs.unlinkSync(`public/images/${req.body.oldImage}`);
        }
        
        writeJSON("productsDataBase.json", products);
        res.redirect("/admin/adminPerfil");
        } else{
            let productId = Number(req.params.id);
		    let productToEdit = products.find(product => product.id === productId);

            if(productToEdit){
                res.render("admin/editProduct", {
                    productToEdit, 
                    categories,
                    subCategories,
                    errors: errors.mapped(),
                    old: req.body,
            })
        } else{
            res.send("No se encontro el producto");
            }
         }



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