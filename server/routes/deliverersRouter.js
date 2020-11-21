const express = require("express");
const db = require("../db/deliverers");
let mysql = require("../db");

const deliverersRouter = express.Router();

deliverersRouter.get("/", (req, res, next) => {
  // try{
  //     let results = await db.all();
  //     res.json(results);
  // }catch(e){
  //     console.log(e);
  //     res.sendStatus(500);
  // }

  mysql.pool.query(`SELECT * FROM deliverers;`, (err, results) => {
    if (err) {
      console.log(JSON.stringify(err));
      res.sendStatus(500);
      res.end();
      return;
    }
    res.end(JSON.stringify(results));
    // res.json(results);
    // return;
  });
});

deliverersRouter.get('/search', (req, res, next) => {

  mysql.pool.query(`SELECT * FROM deliverers WHERE firstName = ?;`,[req.body.firstName], (err, results) => {
      if(err){
          console.log(JSON.stringify(err));
          res.sendStatus(500);
          res.end();
      }
      res.end(JSON.stringify(results));
      // res.json(results);
      // return;
  });
});

deliverersRouter.post("/", (req, res, next) => {
  var query = "INSERT INTO deliverers (firstName, lastName) VALUES  (?, ?);";
  var inserts = [req.body.firstName, req.body.lastName];
  mysql.pool.query(query, inserts, (err, results, fields) => {
    if (err) {
      console.log(JSON.stringify(err));
      res.sendStatus(500);
      res.end();
    }
    res.sendStatus(201);
  });
});

deliverersRouter.put("/", (req, res, next) => {
  var query =
    "UPDATE deliverers SET firstName = ?, lastName = ? WHERE delivererID = ?;";
  var inserts = [req.body.firstName, req.body.lastName, req.body.delivererID];
  mysql.pool.query(query, inserts, (err, results, fields) => {
    if (err) {
      console.log(JSON.stringify(err));
      res.sendStatus(500);
      res.end();
    }
    res.sendStatus(200);
  });
});

deliverersRouter.delete("/", (req, res, next) => {
  var query = "DELETE FROM deliverers WHERE delivererID = ?;";
  var inserts = [req.body.delivererID];
  mysql.pool.query(query, inserts, (err, results, fields) => {
    if (err) {
      console.log(JSON.stringify(err));
      res.sendStatus(500);
      res.end();
    }
    res.sendStatus(202);
  });
});

module.exports = deliverersRouter;
