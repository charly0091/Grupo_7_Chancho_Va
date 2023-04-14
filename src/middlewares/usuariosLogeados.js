function usuariosLogeados (req, res, next) {
    if (req.session.user.rol === "user") {
        next();
    }else{
        res.send("esta pagina es solo para admin")
    }
}

module.exports = usuariosLogeados