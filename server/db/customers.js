let mysql = require("./");

let customers = {};

customers.all = () => {
    return new Promise((resolve, reject) =>{
        mysql.pool.query(`SELECT * FROM customers;`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// customers.one = () => {
//     return new Promise((resolve, reject) =>{
//         var query = "INSERT INTO customers (firstName, lastName, email, password, address) VALUES  (?, ?, ?, ?, ?);";
// 		var inserts = [req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.address];
//         mysql.pool.query(query, inserts, (err, results, fields) => {
//             if(err){
//                 return reject(err);
//             }
//             return resolve(results);
//         });
//     });
// };
module.exports = customers;