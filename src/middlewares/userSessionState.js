module.exports = (req, res, next) =>  req.session.userLogged ? res.redirect("/") : next();

