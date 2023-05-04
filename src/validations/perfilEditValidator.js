const { check,body} = require("express-validator");

module.exports = [

    check("firstName")
    .notEmpty()
    .withMessage("El nombre es obligatorio").bail()
    .isLength({
        min: 2,
    })
    .withMessage("El nombre debe tener al menos 2 caracteres"),

    check("lastName")
    .notEmpty()
    .withMessage("El apellido es obligatorio").bail()
    .isLength({
        min: 2,
    })
    .withMessage("El apellido debe tener al menos 2 caracteres")

]