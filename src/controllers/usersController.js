const fs = require('fs');
const path = require('path');
const usersDataPath = path.join(__dirname, "../data/usuariosRegistrados.json");
const users = JSON.parse(fs.readFileSync(usersDataPath, "utf-8"));
const writeJson = (users) => {
    fs.writeFileSync(usersDataPath, JSON.stringify(users), "utf8")
}


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
        writeJson(users);
        res.redirect("/users/login");
    },
    login: (req, res) => {
        res.render("users/login" , { style : "styles.css" })
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