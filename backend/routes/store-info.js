var express = require('express');
var app = express();
var database = require('../config/database');
var moment = require('moment');

//get data from store-info table
app.get('/store-info', (req,res) => {
    let sql = 'SELECT * FROM store_info';

    database.query(sql, (err, result) => {
        if (err) {
            res.status(400).send(err);
            return;
        }

        if (result.length) {
            res.json(result);
        }
        else res.json({});
    });
});

//to register store into store_info table
app.post('/store-registration', (req,res)=> {
    
    const {store_name,manager_name,location}=req.body
    
    if(!req.files)
        return res.status(400).send('No files were uploaded')

    const {logo} = req.files 
    var img_name = logo.name

    //console.log(req.files)
    //console.log(img_name)
    //console.log(req.body.store_name)
    //console.log(req.body.location)

    database.query("INSERT INTO store_info (store_name, manager_name, location, logo) VALUES (?,?,?,?)", 
    [store_name, manager_name, location, logo],
    
    (err, result) => {
        if(!err)
            res.send(result)
            }
        ) 
    });
    
module.exports = app;