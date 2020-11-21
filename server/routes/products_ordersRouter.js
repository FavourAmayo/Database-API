const express = require('express');
const db = require('../db/products_orders');
let mysql = require("../db");


const products_ordersRouter = express.Router();

products_ordersRouter.get('/', async(req, res, next) => {

    try{
        let results = await db.all();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

products_ordersRouter.post('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "INSERT INTO products_orders (productID, orderID) VALUES  (?, ?);";
		var inserts = [req.body.productID, req.body.orderID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(201);
        });
    });
});

products_ordersRouter.put('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "UPDATE products_orders SET productID = ? WHERE orderID = ?;";
		var inserts = [req.body.productID, req.body.orderID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(200);
        });
    });
});

products_ordersRouter.delete('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "DELETE FROM products_orders WHERE orderID = ? AND productID = ?;";
		var inserts = [req.body.orderID, req.body.productID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(202);
        });
    });
});

module.exports = products_ordersRouter;