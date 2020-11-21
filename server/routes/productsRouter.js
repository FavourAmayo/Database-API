const express = require('express');
const db = require('../db/products');
let mysql = require("../db");


const productsRouter = express.Router();

productsRouter.get('/', (req, res, next) => {

    // try{
    //     let results = await db.all();
    //     res.json(results);
    // }catch(e){
    //     console.log(e);
    //     res.sendStatus(500);
    // }

    mysql.pool.query(`SELECT * FROM products;`, (err, results) => {
        if(err){
            console.log(JSON.stringify(err));
            res.sendStatus(500);
            res.end();
        }
        res.end(JSON.stringify(results));
    });
});

productsRouter.get('/search', (req, res, next) => {

    mysql.pool.query(`SELECT * FROM products WHERE name = ?;`,[req.body.name], (err, results) => {
        if(err){
            console.log(JSON.stringify(err));
            res.sendStatus(500);
            res.end();
        }
        res.end(JSON.stringify(results));
    });
});

productsRouter.post('/', (req, res, next) => {

        var query = "INSERT INTO products (name, description, price, quantity) VALUES  (?, ?, ?, ?);";
		var inserts = [req.body.name, req.body.description, req.body.price, req.body.quantity];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                console.log(JSON.stringify(err));
                res.sendStatus(500);
                res.end();
            }
            res.sendStatus(201);
        });
});

productsRouter.put('/', (req, res, next) => {

        var query = "UPDATE products SET name = ?, description = ?, price = ?, quantity = ? WHERE productID = ?;";
		var inserts = [req.body.name, req.body.description, req.body.price, req.body.quantity];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                console.log(JSON.stringify(err));
                res.sendStatus(500);
                res.end();
            }
            res.sendStatus(200);
        });
});

productsRouter.delete('/', (req, res, next) => {

        var query = "DELETE FROM products WHERE productID = ?;";
		var inserts = [req.body.productID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                console.log(JSON.stringify(err));
                res.sendStatus(500);
                res.end();
            }
            res.sendStatus(202);
        });
});

module.exports = productsRouter;