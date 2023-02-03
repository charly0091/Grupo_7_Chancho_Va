module.exports = {
    
    users: (req, res) => {
        res.render("users/construccion" , { style : "styles.css" })
    },
    register: (req, res) => {
        res.render("users/register" , { style : "register.css" })
    },
    login: (req, res) => {
        res.render("users/login" , { style : "styles.css" })
    },
    resetPassword: (req, res) => {
        res.render("users/reset-password" , { style : "styles.css" })
    }
}