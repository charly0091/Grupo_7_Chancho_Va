const { readJSON, writeUsersJson, users } = require("../data");
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
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync( req.body.password, 10),
            imagen: req.file ? req.file.filename : "defaultImagePerfil.png",
            rol: "USER",
            tel: "",
            address: "",
            postalCode:"" ,
            province:"" ,
            city:"" 
        }
        users.push(newUser);
        writeUsersJson(users);
        res.redirect("/users/login");

        }else{
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
    metodosDePago: (req, res) => {
        res.render("users/metodosDePago", { style : "metodosDePago.css" , session: req.session})
    },
    pago: (req, res) => {
        res.render("users/pagoTarjeta", { style : "pagoTargeta.css" , session: req.session})
    },
    
}