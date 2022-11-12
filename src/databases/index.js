const knex = require("knex");
const knexConfiguration = require("../../knexfile.js");
const db = knex(knexConfiguration.development);

module.exports = db;
