function adminLogeados (req, res, next) {
    if (req.session.user.rol === "admin") {
        next();
    }else{
        res.redirect("/")
    }
}

module.exports = adminLogeados