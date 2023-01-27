module.exports = {
    
    users: (req, res) => {
        res.render("construccion")
    },
    register: (req, res) => {
        res.render("register")
    },
    login: (req, res) => {
        res.render("login")
    },
    resetPassword: (req, res) => {
        res.render("reset-password")
    }
}