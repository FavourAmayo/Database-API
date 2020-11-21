
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_osagieae',
  password        : '7996',
  database        : 'cs340_osagieae'
});

// let instaDelivery = {};

// instaDelivery.all = () => {
//     return new Promise((resolve, reject) =>{
//         pool.query(`SELECT * FROM customers`, (err, results) => {
//             if(err){
//                 return reject(err);
//             }
//             return resolve(results);
//         });
//     });
// };
module.exports.pool = pool;
//module.exports = instaDelivery;