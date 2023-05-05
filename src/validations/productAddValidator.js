const { check } = require("express-validator");
const path = require("path");

module.exports = [
    check("name")
        .notEmpty().withMessage("Debe ingresar el nombre del producto").bail()
        .isLength({ min: 5}).withMessage("El nombre debe tener minimo 5 caracteres"),

    check("price")
        .notEmpty().withMessage("Debes indicar el precio del producto").bail()
        .isFloat({min:0}).withMessage("El precio debe ser mayor a $0"),

    check("discount")
        .notEmpty().withMessage("Debes indicar el descuento del producto").bail()
        .isInt({min:0,max:100}).withMessage("El descuento debe ser un número entre 0 y 100"),

    check("category")
        .notEmpty().withMessage("Debes indicar la categoría del producto").bail(),

    check("subCategory")
        .notEmpty().withMessage("Debes indicar la subcategoría del producto").bail(),

    check("description")
        .notEmpty().withMessage("La descripción es obligatoria").bail()
        .isLength({ min: 20}).withMessage("La descripción debe tener mínimo 20 caracteres"),


     check("productPhoto")
        .custom((value, { req }) => {
            let file = req.file;
            if(file){
                let acceptedExtensions = [".jpg", "jpeg" ,".png", ".gif"];
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
                }
            } 
            return true;
        }) 
];
