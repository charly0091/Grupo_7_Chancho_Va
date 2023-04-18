const fs = require('fs');
const path = require('path');

module.exports = {
    users : JSON.parse(fs.readFileSync(path.join(__dirname, "../old-database/usersDataBase.json"), "utf-8")),
    admins : JSON.parse(fs.readFileSync(path.join(__dirname, "../old-database/adminRegistrados.json"), "utf-8")),
    readJSON : (json) => {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, json)))
    },
    writeJSON : (json, array) => {
        fs.writeFileSync(path.resolve(__dirname, json), JSON.stringify(array,null,3), 'utf-8')
    },
    writeUsersJson: (data) => {
        fs.writeFileSync(path.join(__dirname, "../data/usersDataBase.json"), JSON.stringify(data), "utf-8")
    },
}
