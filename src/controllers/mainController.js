module.exports = {
    
    main: (req, res) => {
        res.render("home" , { style : "home.css" })
    },
    about: (req, res) => {
        res.render("about" , { style : "styles.css" })
    },
    terms: (req, res) => {
        res.render("terms" , { style : "styles.css" })
    },
    help: (req, res) => {
        res.render("help" , { style : "styles.css" })
    },
    construccion: (req, res) => {
        res.render("construccion" , { style : "styles.css" })
    },
    contact: (req, res) => {
        res.render("contact" , { style : "styles.css" })
    }
}