const express = require('express');
const db = require('../db/payments');
let mysql = require("../db");


const paymentsRouter = express.Router();

paymentsRouter.get('/', async(req, res, next) => {

    try{
        let results = await db.all();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

paymentsRouter.post('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "INSERT INTO payments (customerID, cardNumber, bank, ccv, expirationDate) VALUES  (?, ?, ?, ?, ?);";
		var inserts = [req.body.customerID, req.body.cardNumber, req.body.bank, req.body.ccv, req.body.expirationDate];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(201);
        });
    });
});

paymentsRouter.put('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "UPDATE payments SET customerID = ?, cardNumber = ?, bank = ?, ccv = ?, expirationDate = ? WHERE paymentID = ?;";
		var inserts = [req.body.customerID, req.body.cardNumber, req.body.bank, req.body.ccv, req.body.expirationDate];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(200);
        });
    });
});

paymentsRouter.delete('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "DELETE FROM payments WHERE paymentID = ?;";
		var inserts = [req.body.orderID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(202);
        });
    });
});

module.exports = paymentsRouter;