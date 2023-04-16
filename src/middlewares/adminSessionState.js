module.exports = (req, res, next) => {
    if(!req.session.userLogged) return res.redirect("/users/login");
    if(req.session.userLogged.rol  !== 1) return res.redirect("/");
    next();
}
