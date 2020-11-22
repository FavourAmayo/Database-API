var mysql = require("mysql");
// var pool = mysql.createPool({
//   connectionLimit: 1000,
//   connectTimeout: 60 * 60 * 1000,
//   acquireTimeout: 60 * 60 * 1000,
//   timeout: 60 * 60 * 1000,
//   host: "classmysql.engr.oregonstate.edu",
//   user: "cs340_osagieae",
//   password: "7996",
//   database: "cs340_osagieae",
// });

var pool = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: "database-2.ch4fpdxcfwkt.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "gen7ser$",
  database: "InstaDelivery",
  port: 3306,
});

module.exports.pool = pool;
