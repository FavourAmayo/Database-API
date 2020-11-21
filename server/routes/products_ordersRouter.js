const express = require('express');
const db = require('../db/products_orders');
let mysql = require("../db");


const products_ordersRouter = express.Router();

products_ordersRouter.get('/', (req, res, next) => {

    // try{
    //     let results = await db.all();
    //     res.json(results);
    // }catch(e){
    //     console.log(e);
    //     res.sendStatus(500);
    // }

    mysql.pool.query(`SELECT * FROM products_orders;`, (err, results) => {
        if(err){
            console.log(JSON.stringify(err));
            res.sendStatus(500);
            res.end();
        }
        res.end(JSON.stringify(results));
    });
});

products_ordersRouter.post('/', (req, res, next) => {

        var query = "INSERT INTO products_orders (productID, orderID) VALUES  (?, ?);";
		var inserts = [req.body.productID, req.body.orderID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                console.log(JSON.stringify(err));
                res.sendStatus(500);
                res.end();
            }
            res.sendStatus(201);
        });
});

products_ordersRouter.put('/', (req, res, next) => {

        var query = "UPDATE products_orders SET productID = ? WHERE orderID = ?;";
		var inserts = [req.body.productID, req.body.orderID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                console.log(JSON.stringify(err));
                res.sendStatus(500);
                res.end();
            }
            res.sendStatus(200);
        });
});

products_ordersRouter.delete('/', (req, res, next) => {

        var query = "DELETE FROM products_orders WHERE orderID = ? AND productID = ?;";
		var inserts = [req.body.orderID, req.body.productID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                console.log(JSON.stringify(err));
                res.sendStatus(500);
                res.end();
            }
            res.sendStatus(202);
        });
});

module.exports = products_ordersRouter;