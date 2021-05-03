const express = require("express");
const mysql = require('mysql');
const app = express();

app.use(express.json());

//connect to database
const con = mysql.createConnection({
    //port: 3005,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'MinimaLine'
});

module.exports = con;