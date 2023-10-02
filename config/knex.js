var env = process.env.ENVIRONMENT;
var config = require("./knexFile")[env];

module.exports = require("knex")(config);
