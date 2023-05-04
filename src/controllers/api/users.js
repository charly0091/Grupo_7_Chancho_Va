const {User} = require("../../database/models");

module.exports = {
    usersList: (req, res) => {
        User.findAll()
        .then(users => {
            res.json(users)
        })
    }
}

    