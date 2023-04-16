const { check, body } = require("express-validator");
const {User} = require("../database/models");
const bcrypt = require("bcryptjs")

module.exports = [
    check("email")
        .notEmpty().withMessage("Debe ingresar un email").bail()
        .isEmail().withMessage("Debe ingresar un email válido"),

        body("email")
        .custom((value) => {
            let userToLogin = User.findOne({
                where: {
                    email: value
                }
            })
            if(userToLogin){
                return true;
            } else {
                return false;
            }
        }).withMessage("El email no se encuentra registrado"),

    check("password")
        .notEmpty().withMessage("Debe ingresar una contraseña").bail(),

    body("password")
        .custom((value, {req}) => {
            let userToLogin = User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if(userToLogin){
                if(bcrypt.compareSync(value , userToLogin.password )){
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }).withMessage("La contraseña es incorrecta")
];