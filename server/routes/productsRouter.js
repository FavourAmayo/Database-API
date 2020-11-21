const express = require('express');
const db = require('../db/products');
let mysql = require("../db");


const productsRouter = express.Router();

productsRouter.get('/', async(req, res, next) => {

    try{
        let results = await db.all();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

productsRouter.post('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "INSERT INTO products (name, description, price, quantity) VALUES  (?, ?, ?, ?);";
		var inserts = [req.body.name, req.body.description, req.body.price, req.body.quantity];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(201);
        });
    });
});

productsRouter.put('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "UPDATE products SET name = ?, description = ?, price = ?, quantity = ? WHERE productID = ?;";
		var inserts = [req.body.name, req.body.description, req.body.price, req.body.quantity];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(200);
        });
    });
});

productsRouter.delete('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "DELETE FROM products WHERE productID = ?;";
		var inserts = [req.body.productID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(202);
        });
    });
});

module.exports = productsRouter;