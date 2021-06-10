var express = require('express');
var app = express();
var database = require('../config/database');
//var moment = require('moment');
//const multer = require('multer');
//const path = require("path");

const {check, validationResult} = require('express-validator');



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
app.post('/store-registration/:id', [
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
    const id = req.params.id

    //console.log(store_name, manager_name, location,logo)

    if (!req.files){
        database.query("UPDATE account_info SET store_name=?, manager_name=?, location=? WHERE id = ? ", [store_name, manager_name, location, id],
            (err, result) => {
                if(!err)
                    return res.status(200).send(result);
                else
                    console.log(err)
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
                
                database.query("INSERT INTO account_info (store_name,manager_name,location,logo) where id = ? VALUES ('" + store_name + "','" + manager_name + "','" + location + "','" + img_name + "')", id,
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