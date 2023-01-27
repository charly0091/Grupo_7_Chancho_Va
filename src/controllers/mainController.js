module.exports = {
    
    main: (req, res) => {
        res.render("home")
    },
    about: (req, res) => {
        res.render("about")
    },
    terms: (req, res) => {
        res.render("terms")
    },
    help: (req, res) => {
        res.render("help")
    },
    construccion: (req, res) => {
        res.render("construccion")
    },
    contact: (req, res) => {
        res.render("contact")
    }
}