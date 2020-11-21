var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: "classmysql.engr.oregonstate.edu",
  user: "cs340_osagieae",
  password: "7996",
  database: "cs340_osagieae",
});

module.exports.pool = pool;
