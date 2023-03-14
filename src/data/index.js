const fs = require('fs');
const path = require('path');

module.exports = {
    users : JSON.parse(fs.readFileSync(path.join(__dirname, "../data/userDataBase.json"), "utf-8")),
    admins : JSON.parse(fs.readFileSync(path.join(__dirname, "../data/adminRegistrados.json"), "utf-8")),
    readJSON : (json) => {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, json)))
    },
    writeUsersJson: (data) => {
        fs.writeFileSync(path.join(__dirname, "../data/userDataBase.json"), JSON.stringify(data), "utf-8")
    },
}
