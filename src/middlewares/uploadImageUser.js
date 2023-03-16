const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "../../public/images/perfilUser"))
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}_image${path.extname(file.originalname)}`)
    }
});

module.exports = multer({storage});