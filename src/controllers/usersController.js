const { users, writeUsersJson } = require("../data")


module.exports = {
    users: (req, res) => {
        res.render("users/construccion", { style: "styles.css" })
    },
    register: (req, res) => {
        res.render("users/register", { style: "register.css" });
    },
    crearUsuario: (req, res) => {
        return res.send(req.body)
        /* let lastId = 0; */
       /*  users.forEach(user => {
            if (user.id > lastId) {
                lastId = user.id;
            }
        }); */
        let newUser = {
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            avatar: "defaultImagePerfil.png",
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
    },
    login: (req, res) => {
        res.render("users/login", { style: "login.css" })
    },
    resetPassword: (req, res) => {
        res.render("users/reset-password", { style: "styles.css" })
    },
    metodosDePago: (req, res) => {
        res.render("users/metodosDePago", { style: "metodosDePago.css" })
    },
    pago: (req, res) => {
        res.render("users/pagoTarjeta", { style: "pagoTargeta.css" })
    },
}