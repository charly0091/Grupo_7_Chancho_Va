const { check,body} = require("express-validator");
const path = require("path");

module.exports = [
  
    check("email")
    .notEmpty()
    .withMessage("El email es obligatorio").bail()
    .isEmail()
    .withMessage("Email inválido"),

    body("email")
    .custom (value => {
        let user = users.find(user.email === value)
        return user !== undefined;
    })
    .withMessage("Email no registrados"),   

    check("password")
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body("password")
    .custom((value, {req}) => {
        let user = users.find(user.email === req.body.email)
        return user.password === value;
    })
    .withMessage("Credenciales inválidas")

    
]