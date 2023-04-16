const { check, body } = require("express-validator");
const {User} = require("../database/models");

module.exports = [
    /* check("id")
    .notEmpty()
    .withMessage("el nombre de usuario el obligatorio"),
    
    body("id")
    .custom(value => {
        let user = users.find(user => user.id === value);
        return user === undefined;
    })
    .withMessage("nombre de usuario ya esta en uso"), */

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
    .custom((value) => {
        return User.findOne({
            where: {
                email: value
            }
    })
    .then(user => {
        if (user) {
            return Promise.reject("Email ya registrado")
        }
    })
    .catch(error => res.send(error))
    }),

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