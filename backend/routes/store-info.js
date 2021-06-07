var express = require('express');
var app = express();
//const multer = require('multer');
//const path = require("path");

const {check, validationResult} = require('express-validator');

var database = require('../config/database');
//var moment = require('moment');

/*
const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function(res, file, cb){
        cb(null,"IMAGE-" + Date.now() +
    path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
}).single("myImage");
*/

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
app.post('/store-registration', [
    check('store_name')
    .notEmpty()
    .withMessage('Store name cannot be empty'),
    check('manager_name')
    .notEmpty()
    .withMessage('Manager name cannot be empty'),
    check('location')
    .notEmpty()
    .withMessage('Location cannot be empty')
    ] , /*upload,*/ (req,res)=> {

    const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const store_name = req.body.store_name;
    const manager_name= req.body.manager_name;
    const location= req.body.location;
    const logo = req.body.logo;

    console.log(store_name, manager_name, location,logo)

    if (!req.files){
        database.query("INSERT INTO store_info (store_name,manager_name,location) VALUES ('" + store_name + "','" + manager_name + "','" + location + "')",
            (err, result) => {
                if(!err)
                    return res.status(200).send(result);
                });
        }
    
    else{
        console.log("hello")
        var file = req.files.logo;
        var img_name = file.name;
        console.log("file uploaded:")
        console.log(file)

        if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"|| file.mimetype == "image/gif" || file.mimetype == "image/svg" || file.mimetype == "image/jpg"){
            file.mv('public/uploads'+ file.name , function(err) {
            //upload(res,req,function(err) {
                if (err) 
                    return res.status(500).send(err);
                
                database.query("INSERT INTO store_info (store_name,manager_name,location,logo) VALUES ('" + store_name + "','" + manager_name + "','" + location + "','" + img_name + "')",
                    (err, result) => {
                        if(!err)
                            return res.status(200).send(result)
                        else
                            return res.status(400).send("error")
                    });
                });
            } 
                else {
                    console.log("This format is not allowed , please upload file with '.png','.gif','.jpg'");
                }
    }
});
    
module.exports = app;