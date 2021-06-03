var express = require('express');
var bcrypt = require('bcrypt');

const {check, validationResult} = require('express-validator');

var app = express();
var database = require('../config/database');


//get data from account-info table (OK)
app.get('/account-info', (req,res) => {
    let sql = 'SELECT * FROM account_info';

    database.query(sql, (err, result) => {
        if (err) {
            res.status(400).send(err);
            return;
        }
        if (result.length) {
            res.status(200).json(result);
        }
        else res.status(200).json({});
    });
});

//to register user info in account_info table (OK [no validation])
app.post('/user-registration', [
    check('username')
    .notEmpty()
    .withMessage('Username cannot be empty')
    .isLength({min: 4}) 
    .withMessage('Username should be at least 4 characters long')
    .isLength({max: 20})
    .withMessage('Username cannot be more than 20 characters long')
    .exists()
    .withMessage('Username exists'),
    check('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Email should be valid')
    .exists()
    .withMessage('Email exists'),
    check('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({min: 4, max: 20})
    .withMessage('Password should be between 4 - 20 characters'),
    ], (req,res)=> {

    const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    var role = "manager"
    const {username,email,password}=req.body
    //hashPass = await bcrypt.hash(password,10)
    //console.log(password+'\n'+hashPass)
    //console.log(username, password, email) 
    

    database.query("INSERT INTO account_info (username, email, password,role) VALUES (?,?,?,?)", 
    [username, email, password,role], 
    (err, result) => {
        if(!err){
            console.log(result)
            res.status(201).send(result)   
        }
        else
            res.status(400)
    })
});

app.post('/')
//authentication for user-login 
app.post('/user-login', (req,res)=> {

    const {username,password}=req.body
    
    database.query("SELECT * FROM account_info WHERE username = ? AND password = ?", 
    [username, password], 
    (err, result) => {
        if (result.length > 0) {
            res.status(201).send(result)
        }
        else {
            res.status(400).send({message: "Wrong username and/or password!"});
        }
    });
});

module.exports = app;