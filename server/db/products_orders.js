let mysql = require("./");

let products_orders = {};

products_orders.all = () => {
    return new Promise((resolve, reject) =>{
        mysql.pool.query(`SELECT * FROM products_orders;`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = products_orders;