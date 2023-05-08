const { check, body } = require("express-validator");
const {User} = require("../database/models");
const path = require("path");

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
    .withMessage("el nombre es obligatorio").bail()
    .isLength({
        min: 2,
    })
    .withMessage("El nombre debe tener al menos 2 caracteres"),

    check("lastName")
    .notEmpty()
    .withMessage("el apellido es obligatorio").bail()
    .isLength({
        min: 2,
    })
    .withMessage("El apellido debe tener al menos 2 caracteres"),

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
    }),

    check('password')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña').bail()
    .isLength({
        min: 8,
    })
    .withMessage('La contraseña debe tener como mínimo 8 caracteresss'),

    body('password2')
    .custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terminos')
    .isString('on')
    .withMessage('Debes aceptar los términos y condiciones'),

    check("imagen")
    .custom((value, { req }) => {
        let file = req.file;
        if(file){
            let acceptedExtensions = [".jpg", ".jpeg" , ".png", ".gif"];
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
            }
        } 
        return true;
    })
]