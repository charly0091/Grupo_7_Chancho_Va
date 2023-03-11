const multer = require("multer");
const path = require("path");

const storeAvatar = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "public/images/avatar")
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}_avatar${path.extname(file.originalname)}`)
    }
});

const uploadAvatar = multer({
    storage: storeAvatar,
    fileFilter: (req, file, callback) => {
        const acceptedExtensions = [".jpg", ".jpeg", ".png" , ".gif", ".webp"];
        const ext = path.extname(file.originalname);
        if(!acceptedExtensions.includes(ext)){
            req.fileError = "Formato de imagen no válido, los formatos aceptados son: " + acceptedExtensions.join(", ");
            return callback(null, false, req.fileError);
        }
        callback(null, true);
    }
}) 

module.exports = {
    uploadAvatar
}