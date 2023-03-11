module.exports = (req, res, next) => {
    if (req.cookies.userEmail && !req.session.userLogged) {
        req.session.userLogged = req.cookies.userEmail;
        res.locals.user = req.session.userLogged;
    }
    next();
    }
