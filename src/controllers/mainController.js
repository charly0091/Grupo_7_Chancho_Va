module.exports = {
    
    main: (req, res) => {
        res.render("main/home" , { style : "home.css" })
    },
    about: (req, res) => {
        res.render("main/about" , { style : "styles.css" })
    },
    terms: (req, res) => {
        res.render("main/terms" , { style : "styles.css" })
    },
    help: (req, res) => {
        res.render("main/help" , { style : "styles.css" })
    },
    construccion: (req, res) => {
        res.render("main/construccion" , { style : "styles.css" })
    },
    contact: (req, res) => {
        res.render("main/contact" , { style : "styles.css" })
    }
}