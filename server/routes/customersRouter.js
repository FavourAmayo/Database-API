const express = require('express');
const db = require('../db/customers');
let mysql = require("../db");

const customersRouter = express.Router();

customersRouter.get('/', async(req, res, next) => {

    try{
        let results = await db.all();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

customersRouter.post('/', async(req, res, next) => {

    // try{
    //     let results = await db.one();
    //     res.json(results);
    // }catch(e){
    //     console.log(e);
    //     res.sendStatus(500);
    // }

    return new Promise((resolve, reject) =>{
        var query = "INSERT INTO customers (firstName, lastName, email, password, address) VALUES  (?, ?, ?, ?, ?);";
		var inserts = [req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.address];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(201);
        });
    });
});

customersRouter.put('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "UPDATE customers SET email = ?, password = ? WHERE customerID = ?;";
		var inserts = [req.body.email, req.body.password, req.body.customerID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(200);
        });
    });
});

customersRouter.delete('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "DELETE FROM customers WHERE email = ? AND password = ?;";
		var inserts = [req.body.email, req.body.password];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(202);
        });
    });
});

module.exports = customersRouter;