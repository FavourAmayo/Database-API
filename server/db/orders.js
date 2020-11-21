let mysql = require("./");

let orders = {};

orders.all = () => {
    return new Promise((resolve, reject) =>{
        mysql.pool.query(`SELECT * FROM orders;`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = orders;