const {Product,Category,SubCategory} = require("../database/models");
const { validationResult } = require("express-validator");




module.exports = {
    products: (req, res) => {
        Product.findAll()
    
          .then((products) => {
            return res.render("admin/products", {
              products,
              session: req.session,
            });
          })
          .catch((error) => console.log(error));
      },
    delete: (req, res) => {
        Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            if(response){
            return res.redirect("/admin/products");
            } else {
                throw new Error("No se pudo eliminar el producto");
            }
        })
        .catch(error => console.log(error));
    },
    create: (req, res) => {

        let categories = Category.findAll();
        let subCategories = SubCategory.findAll();

        Promise.all([categories, subCategories])
        .then(([categories, subCategories]) => {

        res.render("admin/createProduct", {
            categories,
            subCategories,
            session: req.session
        })
    })
    },
    store: (req, res) => {

        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            Product.create({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                category_id: req.body.category,
                subCategory_id: req.body.subCategory,
                description: req.body.description,
                image: req.file ? req.file.filename : null
            })
            .then(response => {
                if(response){
                    return res.redirect("/admin/products");
                } else {
                    throw new Error("No se pudo crear el producto");
                }
            })
            .catch(error => console.log(error));
        } else {

            let categories = Category.findAll();
            let subCategories = SubCategory.findAll();

            Promise.all([categories, subCategories])
            .then(([categories, subCategories]) => {

                 res.render("admin/createProduct", {
                    categories,
                    subCategories,
                    session: req.session,
                    errors: errors.mapped(),
                    old: req.body
                })
            })
        }

    },
    edit: (req, res) => {
        
        let categories = Category.findAll();
        let subCategories = SubCategory.findAll();
        let productToEdit = Product.findByPk(req.params.id);

        Promise.all([categories, subCategories, productToEdit])
        .then(([categories, subCategories, productToEdit]) => {
            if(productToEdit){
                res.render("admin/editProduct", {
                    productToEdit,
                    categories,
                    subCategories,
                    session: req.session
                })
            } else {
                res.send("No se encontro el producto");
            }
        })
        .catch(error => console.log(error));
    },
    update: (req, res) => {
        
        let errors = validationResult(req);

        let categories = Category.findAll();
        let subCategories = SubCategory.findAll();
        let productToEdit = Product.findByPk(req.params.id);
        

        if(errors.isEmpty()){
            Product.update({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                category: req.body.category,
                subCategory: req.body.subCategory,
                description: req.body.description,
                image: req.file ? req.file.filename : null
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(response => {
                if(response){
                    return res.redirect("/admin/products");
                } else {
                    throw new Error("No se pudo actualizar el producto");
                }
            })
            .catch(error => console.log(error));
        } else {
            Promise.all([categories, subCategories, productToEdit])
            .then(([categories, subCategories, productToEdit]) => {
            res.render("admin/editProduct", {
                categories,
                subCategories,
                errors: errors.mapped(),
                old: req.body,
                session: req.session,
                productToEdit
            })
        })
        .catch(error => console.log(error));
        }
        
    },
    admin: (req, res) => {
        res.render("./admin/adminPerfil", { session: req.session })
    },
    editRender: (req, res) => {
        res.render("./admin/adminPerfilEdit", { session: req.session })
    },
    editAdmin: (req, res) => {
        res.render("./admin/adminPerfilEdit", { session: req.session })
    },
    adminUsersRegister: (req, res) => {
        res.render("./admin/adminPerfilUsers", { session: req.session })
    },
    adminUsersQuestions: (req, res) => {
        res.render("./admin/adminPerfilQuestions", { session: req.session })
    },
    adminUsersShipments: (req, res) => {
        res.render("./admin/adminPerfilShipments", { session: req.session })
    },
    adminPerfilReturnedPackages: (req, res) => {
        res.render("./admin/adminPerfilReturnedPackages", { session: req.session })
    },
    adminPerfilClaims: (req, res) => {
        res.render("./admin/adminPerfilClaims", { session: req.session })
    },
}