module.exports = (req, res, next) => {
    if (req.cookies.userEmail && !req.session.userLogged) {
        res.session.userLogged = req.cookies.userEmail;
        res.locals.user = req.session.userLogged;
    }
    next();
}
