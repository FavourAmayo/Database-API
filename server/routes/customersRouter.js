const express = require('express');
const db = require('../db/customers');
let mysql = require("../db");

const customersRouter = express.Router();

customersRouter.get('/', (req, res, next) => {

    // try{
    //     let results = await db.all();
    //     res.json(results);
    // }catch(e){
    //     console.log(e);
    //     res.sendStatus(500);
    // }

    mysql.pool.query(`SELECT * FROM customers;`, (err, results) => {
        if(err){
            console.log(JSON.stringify(err));
            res.sendStatus(500);
            res.end();
        }
        res.end(JSON.stringify(results));
    });
});

customersRouter.post('/', (req, res, next) => {
        var query = "INSERT INTO customers (firstName, lastName, email, password, address) VALUES  (?, ?, ?, ?, ?);";
		var inserts = [req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.address];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                console.log(JSON.stringify(err));
                res.sendStatus(500);
                res.end();
            }
            res.sendStatus(201);
        });
   
});

customersRouter.put('/', (req, res, next) => {

        var query = "UPDATE customers SET email = ?, password = ? WHERE customerID = ?;";
		var inserts = [req.body.email, req.body.password, req.body.customerID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                console.log(JSON.stringify(err));
                res.sendStatus(500);
                res.end();
            }
            res.sendStatus(200);
        });
});

customersRouter.delete('/', (req, res, next) => {

        var query = "DELETE FROM customers WHERE email = ? AND password = ?;";
		var inserts = [req.body.email, req.body.password];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                console.log(JSON.stringify(err));
                res.sendStatus(500);
                res.end();
            }
            res.sendStatus(202);
        });
});

module.exports = customersRouter;