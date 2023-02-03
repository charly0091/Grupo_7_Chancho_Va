module.exports = {
    
    users: (req, res) => {
        res.render("construccion" , { style : "styles.css" })
    },
    register: (req, res) => {
        res.render("register" , { style : "register.css" })
    },
    login: (req, res) => {
        res.render("login" , { style : "styles.css" })
    },
    resetPassword: (req, res) => {
        res.render("reset-password" , { style : "styles.css" })
    }
}