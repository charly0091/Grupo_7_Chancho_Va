const multer = require("multer");
const path = require("path");

const storeImageProduct = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "public/images")
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}_products_${path.extname(file.originalname)}`)
    }
});

const uploadImageProduct = multer({
    storage: storeImageProduct
}) 

module.exports = {
    uploadImageProduct
}