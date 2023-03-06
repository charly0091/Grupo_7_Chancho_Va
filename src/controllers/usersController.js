const { readJSON, writeJSON } = require("../data");
const users = readJSON("usersDataBase.json");
const {validationResult} = require("express-validator");



module.exports = {
    users: (req, res) => {
        res.render("users/construccion" , { style : "styles.css" })
    },
    register: (req, res) => {
        res.render("users/register" , { style : "register.css" });
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
        res.render("users/login" , { style : "styles.css" })
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let userToLogin = users.find(user => user.email == req.body.email);
            if(userToLogin){
                if(userToLogin.password == req.body.password){
                    req.session.userLogged = userToLogin;
                    if(req.body.remember){
                        res.cookie("userEmail", req.body.email, {maxAge: 1000 * 60 * 60 * 24 * 7})
                    }
                    res.redirect("/");
                } else {
                    res.render("users/login", {
                        old: req.body,
                        style: "styles.css"
                    })
                }
            } else {
                res.render("users/login", {
                    old: req.body,
                    style: "styles.css"
                })
            }
        } else {
            res.render("users/login", {
                errors: errors.mapped(),
                old: req.body,
                style: "styles.css"
            })
        }
    },
    resetPassword: (req, res) => {
        res.render("users/reset-password" , { style : "styles.css" })
    },
    metodosDePago: (req, res) => {
        res.render("users/metodosDePago", { style : "metodosDePago.css"})
    },
    pago: (req, res) => {
        res.render("users/pagoTarjeta", { style : "pagoTargeta.css"})
    },
    
}