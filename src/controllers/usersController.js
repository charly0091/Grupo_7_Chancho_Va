const {User} = require("../database/models");
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const path = require("path");



module.exports = {
    users: (req, res) => {
        res.render("users/construccion" , { style : "styles.css" ,users, session: req.session })
    },
    detail: (req, res) => {
        let user = users.find(user => user.id == req.params.id);    
        res.render("users/detail", { users, style : "detail.css", session: req.session})
    },
    register: (req, res) => {
        res.render("users/register" , {session: req.session })
    },
    crearUsuario: (req, res) => {
        let errors = validationResult(req);
        
        if (errors.isEmpty()) {
            
        let newUser = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            role_id : 2,
            password: bcrypt.hashSync( req.body.password, 10),
            avatar: req.file ? req.file.filename : "defaultImagePerfil.png",
        }

        User.create(newUser)
            .then(() => {
                res.redirect("/users/login");
            })
            .catch(error => res.send(error))
        } else {
            res.render("users/register", {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }

        

    },
    login: (req, res) => {
         if(req.session.userLogged){
            return res.redirect("/");
        }
        res.render("users/login" , { style : "styles.css" ,  session: req.session })
    },
    processLogin: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                req.session.userLogged = {
                    id: user.id,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    email: user.email,
                    avatar: user.avatar,
                    rol: user.role_id
                }
    
                let cookieTime = (1000 * 60 * 60); /* mSeg * seg * min * hor * dia */
    
                if(req.body.remember){
                    res.cookie("userEmail" ,
                     req.session.userLogged ,
                      {
                        expires: new Date(Date.now() + cookieTime),
                        httpOnly: true
                     })
                }

                res.locals.user = req.session.userLogged;

                res.redirect("/");
            })
            .catch(error => console.log(error))
        } else {
            return res.render("users/login", {
                errors: errors.mapped(),
                old: req.body,
                style: "styles.css",
                session: req.session
            })
        }
            
},


    logout: (req,res) => {

        req.session.destroy();

        if(req.cookies.userEmail){
            res.cookie("userEmail" , "" , { maxAge: -1})
        }

        res.redirect("/");

    },
    resetPassword: (req, res) => {
        res.render("users/reset-password" , { style : "styles.css" , session: req.session })
    },
    metodosDePago: (req, res) => {
        res.render("users/metodosDePago", { style : "metodosDePago.css" , session: req.session})
    },
    pago: (req, res) => {
        res.render("users/pagoTarjeta", { style : "pagoTargeta.css" , session: req.session})
    },
    userProfile: (req, res) => {
      
        res.render("users/profile", {session: req.session})

    },
    editUserProfile: (req, res) => {
        res.render("users/editUserProfile", { session: req.session})
    },

    editProfile: (req, res) => {
        let userId = Number(req.params.id);
        let userToEdit = User.findByPk(userId);

        if(userToEdit){
            res.render("users/editProfile", {
                style : "styles.css",
                userToEdit, 
                session: req.session
            })
        } else{
            res.send("No se encontro el perfil");
        }
    },
    products: (req, res) => {
        res.render("users/products",{products, session: req.session})
    },
    usersShipments: (req, res) => {
        res.render("./users/userPerfilShipments", { session: req.session })
    },
    userReturnedPackages: (req, res) => {
        res.render("./users/userReturnedPackages", { session: req.session })
    },
    userClaims: (req, res) => {
        res.render("./users/userClaims", { session: req.session })
    },
    editUser: (req, res) => {
        
        let errors = validationResult(req);
        if(errors.isEmpty()){
            req.session.userLogged.firstName = req.body.firstName;
            req.session.userLogged.lastName = req.body.lastName;
            req.session.userLogged.avatar = req.file ? req.file.filename : req.session.userLogged.avatar;
            
            User.update({
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                avatar: req.file ? req.file.filename : req.session.userLogged.avatar
            }, {
                where: {
                    id: req.session.userLogged.id
                }
            })
            .then(response => {
                if(response){
                    return res.redirect("/users/profile");
                } else {
                    throw new Error("No se pudo actualizar el usuario");
                }
            })
            .catch(error => console.log(error));
        } else {
                res.render("./users/editUserProfile", {
                user,
                session: req.session,
                errors: errors.mapped(),
                old: req.body
                })
        }

    },
    deleteAccount: (req, res) => {
        res.render("users/deleteAccount" , {session: req.session })
    },
    deleteUserProfile: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
		req.session.destroy();
		if (req.cookies.userEmail) {
			res.cookie("userEmail", "", { maxAge: -1 });
		}
		User.findByPk(req.params.id)
			.then((User) => {
				User.destroy({
					where: {
						id: req.params.id,
					},
				})
                
					.then(() => {
						if (
							fs.existsSync(
								path.join(__dirname, "../../public/images/avatar", userLogged.avatar)
							) &&
							userLogged.avatar !== "defaultImagePerfil.png"
						) {
							fs.unlinkSync(
								path.join(__dirname, "../../public/images/avatar", userLogged.avatar)
							);
						}
					})
					.catch((error) => console.log(error));
				res.redirect("/");
			})
			.catch((error) => console.log(error));
    }
},
    image: (req, res) => {
        let userID = Number(req.params.id);

        User.findByPk(userID)
        .then((user) => {
            res.sendFile(path.resolve(__dirname, "../../public/images/perfilUser/" + user.avatar));
        })
        .catch((error) => console.log(error));
    },
}

   
