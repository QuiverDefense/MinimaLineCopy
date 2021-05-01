const mysql = require('mysql');

//connect to database
const con = mysql.createConnection({
    //port: 3005,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'MinimaLine'
});

module.exports = con;