const express = require('express');
const db = require('../db/orders');
let mysql = require("../db");


const ordersRouter = express.Router();

ordersRouter.get('/', async(req, res, next) => {

    try{
        let results = await db.all();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

ordersRouter.post('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "INSERT INTO orders (customerID, dateOrdered, deliveryStatus) VALUES  (?, ?, ?);";
		var inserts = [req.body.customerID, req.body.dateOrdered, req.body.deliveryStatus];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(201);
        });
    });
});

ordersRouter.put('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "UPDATE orders SET delivererID = ?, deliveryStatus = ?, departureTime = ?, arrivalTime = ? WHERE orderID = ?;";
		var inserts = [req.body.delivererID, req.body.deliveryStatus, req.body.departureTime, req.body.arrivalTime, req.body.orderID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(200);
        });
    });
});

ordersRouter.delete('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "DELETE FROM orders WHERE orderID = ?;";
		var inserts = [req.body.orderID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(202);
        });
    });
});

module.exports = ordersRouter;