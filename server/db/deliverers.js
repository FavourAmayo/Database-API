let mysql = require("./");

let deliverers = {};

deliverers.all = () => {
    return new Promise((resolve, reject) =>{
        mysql.pool.query(`SELECT * FROM deliverers;`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = deliverers;