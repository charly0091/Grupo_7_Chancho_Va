const { check, body } = require("express-validator");

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
    .withMessage("El apellido debe tener al menos 2 caracteres"),

    check("rol")
    .notEmpty()
    .withMessage("El rol es obligatorio"),

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

]