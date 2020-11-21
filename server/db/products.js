let mysql = require("./");

let products = {};

products.all = () => {
    return new Promise((resolve, reject) =>{
        mysql.pool.query(`SELECT * FROM products;`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = products;