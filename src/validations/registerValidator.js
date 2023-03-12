const { check,body} = require("express-validator");
const path = require("path");

module.exports = [
    check("userName")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),

    check("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),

    check("lastName")
    .notEmpty()
    .withMessage("El apellido es obligatorio"),

    check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Email inválido"),

    body("email")
    .custom((value) => {
        let user = users.find(user => user.email === value);

        return user === undefined;
    })
    .withMessage("Email ya registrado"),

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
    .withMessage('Debes aceptar los términos y condiciones'),

    check("image")
    .custom((value, { req }) => {
        let file = req.file;
        if(file){
            let acceptedExtensions = [".jpg", ".png", ".gif"];
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
            }
        } 
        return true;
    }) 
]