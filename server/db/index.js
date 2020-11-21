
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_osagieae',
  password        : '7996',
  database        : 'cs340_osagieae'
});

module.exports.pool = pool;