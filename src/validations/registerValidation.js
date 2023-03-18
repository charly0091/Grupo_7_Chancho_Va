const { check, body } = require("express-validator");
const { readJSON, writeJSON } = require("../data");
const users = readJSON("usersDataBase.json");
const bcrypt = require("bcryptjs")

module.exports = [
    check("id")
    .notEmpty()
    .withMessage("el nombre de usuario el obligatorio"),
    
    body("id")
    .custom(value => {
        let user = users.find(user => user.id === value);
        return user === undefined;
    })
    .withMessage("nombre de usuario ya esta en uso"),

    check("firstName")
    .notEmpty()
    .withMessage("el nombre es obligatorio"),

    check("lastName")
    .notEmpty()
    .withMessage("el apellido es obligatorio"),

    check("email")
    .notEmpty()
    .withMessage("el email es obligatorio").bail()
    .isEmail()
    .withMessage("email invalido"),

    body("email")
    .custom(value => {
        let user = users.find(user => user.email === value);
        return user === undefined;
    })
    .withMessage("email ya esta en uso"),

    check('password')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña').bail()
    .isLength({
        min: 6,
    })
    .withMessage('La contraseña debe tener como mínimo 6 caracteres'),

    body('password2')
    .custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terminos')
    .isString('on')
    .withMessage('Debes aceptar los términos y condiciones')
]