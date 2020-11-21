let mysql = require("./");

let payments = {};

payments.all = () => {
    return new Promise((resolve, reject) =>{
        mysql.pool.query(`SELECT * FROM payments;`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = payments;