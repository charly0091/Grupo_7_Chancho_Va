const { readJSON, writeJSON } = require("../data");
const users = readJSON("usersDataBase.json");
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");



module.exports = {
    users: (req, res) => {
        res.render("users/construccion" , { style : "styles.css" ,users, session: req.session })
    },
    detail: (req, res) => {
        let user = users.find(user => user.id == req.params.id);    
        res.render("users/detail", { users, style : "detail.css", session: req.session})
    },
    register: (req, res) => {
        res.render("users/register" , { style : "register.css" , session: req.session })
    },
    crear: (req, res) => {
        let newUser = {
            id: req.body.id,
            email: req.body.email,
            password: req.body.password,
            password2: req.body.password2,
            cel: req.body.cel
        }
        users.push(newUser);
        writeJSON("usersDataBase.json" , users);
        res.redirect("/users/login");
    },
    login: (req, res) => {
         if(req.session.userLogged){
            return res.redirect("/");
        }
        res.render("users/login" , { style : "styles.css" ,  session: req.session })
    },
    processLogin: (req, res) => {

        let errors = validationResult(req);

        if(errors.isEmpty()){
            let userToLogin = users.find(user => user.email == req.body.email);
            if(userToLogin){
                if(bcrypt.compareSync(req.body.password , userToLogin.password)){
                    req.session.userLogged = {
                        id: userToLogin.id,
                        email: userToLogin.email,
                        avatar: userToLogin.avatar,
                        rol: userToLogin.rol
                    };

                    let cookieTime = (1000 * 60 * 60); /* mSeg * seg * min * hor * dia */

                    if(req.body.remember){
                        res.cookie("userEmail",
                        req.session.userLogged,
                        {
                            expires: new Date(Date.now() + cookieTime),
                            httpOnly: true
                        })
                    }

                    res.locals.user = req.session.userLogged;

                    res.redirect("/");
                } else {
                    res.render("users/login", {
                        old: req.body,
                        style: "styles.css",
                        session: req.session
                    })
                }
            } else {
                res.render("users/login", {
                    old: req.body,
                    style: "styles.css",
                    session: req.session
                })
            }
        } else {
            res.render("users/login", {
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
   /* deleteProfile: (req, res) => {
        const userId = req.session.userLogged.id;
        const filteredUsers = users.filter(user => user.id !== userId);
        writeJSON("usersDataBase.json", filteredUsers);
        req.session.destroy();
        if(req.cookies.userEmail){
          res.cookie("userEmail" , "" , { maxAge: -1})
        }
        res.redirect("/");
      },*/
      
    metodosDePago: (req, res) => {
        res.render("users/metodosDePago", { style : "metodosDePago.css" , session: req.session})
    },
    pago: (req, res) => {
        res.render("users/pagoTarjeta", { style : "pagoTargeta.css" , session: req.session})
    },
    userProfile: (req, res) => {
    
        res.render("users/profile", {users, style : "styles.css", session: req.session})
    },
    editUserProfile: (req, res) => {
        res.render("users/editUserProfile", { style : "styles.css" ,users, session: req.session})
    },

    editProfile: (req, res) => {
        let userId = Number(req.params.id);
		let userToEdit = users.find(user => userId.id === userId);

        if(userToEdit){
            res.render("users/editProfile", {
                style : "styles.css",
                userToEdit, 
                users,
                session: req.session
            })
        } else{
            res.send("No se encontro el perfil");
        }
    },
    update: (req, res) => {
        let errors = validationResult(req);

        if(req.fileError){
            errors.errors.push({msg: req.fileError})
        }

        if(errors.isEmpty()){


        let userId = Number(req.params.id);
        let userToEdit = products.find(user => user.id == userId);
        userToEdit.id = userId;
        userToEdit.name = req.body.name;
        userToEdit.price = req.body.price;
        userToEdit.discount = req.body.discount;
        userToEdit.category = req.body.category;
        userToEdit.subCategory = req.body.subCategory;
        userToEdit.description = req.body.description;
        req.body.oldImage = userToEdit.image;
        userToEdit.image = req.file ? req.file.filename : null;


        if(userToEdit.image == null){
            userToEdit.image = req.body.oldImage;
        } else{
            fs.existsSync(`public/images/${req.body.oldImage}`) && fs.unlinkSync(`public/images/${req.body.oldImage}`);
        }
        
        writeJSON("usersDataBase.json", users);
        res.redirect("/users/userProfile");
        } else{
            let userId = Number(req.params.id);
		    let userToEdit = users.find(user => user.id === userId);

            if(userToEdit){
                res.render("users/editProfile", {
                    userToEdit, 
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session
            })
        } else{
            res.send("No se encontro el perfil");
            }
         }



	},
    

    deleteProfile: (req, res) => {
        let userID = Number(req.params.id);
        users.forEach(user => {
            if(user.id === userID){
                let userToDestroy = users.indexOf(user);
                users.splice(userToDestroy, 1)
            }
        })
        writeJSON("usersDataBase.json", users);
        res.send("La cuenta fue destruida")
    }/*,
    products: (req, res) => {
        res.render("users/products",{products, session: req.session})
    },*/


    
    
}