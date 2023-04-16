const {User} = require("../database/models");
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");



module.exports = {
    users: (req, res) => {
        res.render("users/construccion" , { style : "styles.css" , session: req.session })
    },
    register: (req, res) => {
        res.render("users/register" , {session: req.session })
    },
    crearUsuario: (req, res) => {
        let errors = validationResult(req);
        
        if (errors.isEmpty()) {
            
        let newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync( req.body.password, 10),
            imagen: req.file ? req.file.filename : "defaultImagePerfil.png",
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
        res.render("users/login" , { style : "styles.css" , session: req.session })
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
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    imagen: user.imagen,
                    rol: user.rol,
                }

                let tiempoDeCookie = 1000 * 60 * 60 * 24 * 7; // 7 días

                if(req.body.remember){
                    res.cookie("userEmail" ,
                     req.session.user ,
                      {
                        expires: new Date(Date.now() + tiempoDeCookie),
                        httpOnly: true
                     })
                }

                res.locals.user = req.session.user;

                res.redirect("/");
            })
            .catch(error => res.send(error))
        } else {
            res.render("users/login", {
                style: "styles.css",
                errors: errors.mapped(),
                old: req.body,
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
    
}