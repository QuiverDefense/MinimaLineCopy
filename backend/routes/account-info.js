var express = require('express');
var app = express();
var database = require('../config/database');
var moment = require('moment');

//get data from account-info table
app.get('/account-info', (req,res) => {
    let sql = 'SELECT * FROM account_info';

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

module.exports = app;