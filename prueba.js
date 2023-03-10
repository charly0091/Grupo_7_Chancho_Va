const bcryptjs = require("bcryptjs");

let pass = "123";

let hash = bcryptjs.hashSync(pass, 10);

console.log(hash);