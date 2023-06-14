const {Product,Category,SubCategory,User} = require("../database/models");
const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");




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

        Product.findByPk(req.params.id)
        .then((product) => {
            if (fs.existsSync(path.join(__dirname, "../../public/images", product.image)) && product.image != "imageDefault.jpg") {
                fs.unlinkSync(path.join(__dirname, "../../public/images", product.image));
            }
        })

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
                image: req.file ? req.file.filename : "imageDefault.jpg"
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

            if (req.file) {
				fs.unlinkSync( path.join(__dirname, "../../public/images", req.file.filename))
			}

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

            Product.findByPk(req.params.id)
            .then((product) => {
				if (req.file) {
					if (
						fs.existsSync(
							path.join(__dirname, "../../public/images", product.image)
						) &&
						product.image != "imageDefault.jpg"
					) {
						fs.unlinkSync(
							path.join(__dirname, "../../public/images", product.image)
						);
					}
				}
            })
            
            Product.update({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                category: req.body.category,
                subCategory: req.body.subCategory,
                description: req.body.description,
                image: req.file ? req.file.filename : req.body.oldImage
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

            if (req.file) {
				fs.unlinkSync( path.join(__dirname, "../../public/images", req.file.filename))
			}

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
        User.findByPk(req.params.id)
        .then(user => {
            if(user){
                res.render("./admin/adminPerfilEdit", {
                user,
                session: req.session
            })
        } else {
            res.send("No se encontro el usuario");
        }
        })
        .catch(error => console.log(error));
    },
    editAdmin: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            User.update({
/*                 first_name: req.body.firstName,
                last_name: req.body.lastName, */
                role_id: req.body.rol,
                avatar: req.file ? req.file.filename : req.body.oldAvatar
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(response => {
                if(response){
                    return res.redirect("/admin/adminPerfilUsers");
                } else {
                    throw new Error("No se pudo actualizar el usuario");
                }
            })
            .catch(error => console.log(error));
        } else {
            User.findByPk(req.params.id)
            .then(user => {
                if(user){
                    res.render("./admin/adminPerfilEdit", {
                    user,
                    session: req.session,
                    errors: errors.mapped(),
                    old: req.body
                })
            } else {
                res.send("No se encontro el usuario");
            }
            })
            .catch(error => console.log(error));
        }
    },
    adminUsersRegister: (req, res) => {
        User.findAll()
    
          .then((users) => {
            return res.render("./admin/adminPerfilUsers", {
              users,
              session: req.session,
            });
          })
          .catch((error) => console.log(error));
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
    userEdit: (req, res) => {
        User.findByPk(req.params.id)
        .then(user => {
            if(user){
            res.render("./admin/userEdit", {
                user,
                session: req.session

            })
        } else {
            res.send("No se encontro el usuario");
        }
        })
        .catch(error => console.log(error));
    },
    userDelete: (req, res) => {
        User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            if(response){
            return res.redirect("/admin/adminPerfilUsers");
            } else {
                throw new Error("No se pudo eliminar el usuario");
            }
        })
        .catch(error => console.log(error));
    }
}