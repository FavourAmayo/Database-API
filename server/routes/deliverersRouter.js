const express = require('express');
const db = require('../db/deliverers');
let mysql = require("../db");

const deliverersRouter = express.Router();

deliverersRouter.get('/', async(req, res, next) => {

    try{
        let results = await db.all();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

deliverersRouter.post('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "INSERT INTO deliverers (firstName, lastName) VALUES  (?, ?);";
		var inserts = [req.body.firstName, req.body.lastName];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(201);
        });
    });
});

deliverersRouter.put('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "UPDATE deliverers SET firstName = ?, lastName = ? WHERE delivererID = ?;";
		var inserts = [req.body.firstName, req.body.lastName, req.body.delivererID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(200);
        });
    });
});

deliverersRouter.delete('/', async(req, res, next) => {

    return new Promise((resolve, reject) =>{
        var query = "DELETE FROM deliverers WHERE delivererID = ?;";
		var inserts = [req.body.delivererID];
        mysql.pool.query(query, inserts, (err, results, fields) => {
            if(err){
                return reject(err);
            }
            res.sendStatus(202);
        });
    });
});

module.exports = deliverersRouter;