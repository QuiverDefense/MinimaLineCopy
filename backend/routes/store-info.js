var express = require('express');
var app = express();

const {check, validationResult} = require('express-validator');

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
    ] ,(req,res)=> {

    const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    if(req.method == "POST"){
        var post  = req.body;
        var store_name = post.store_name;
        var manager_name= post.manager_name;
        var location= post.location;

        if (!req.files){
            database.query("INSERT INTO store_info (store_name,manager_name,location) VALUES ('" + store_name + "','" + manager_name + "','" + location + "')",
                            (err, result) => {
                                if(!err)
                                    res.send(result)
                                }
                            );
            return res.status(200).send('Insert data into database, but no files were uploaded.');
        }
          
          var file = req.files.logo;
          var img_name = file.name;
          console.log("file uploaded:")
          console.log(file)

             if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"|| file.mimetype == "image/gif" || file.mimetype == "image/svg" || file.mimetype == "image/jpg"){
                                   
                file.mv('public/uploads'+file.name, function(err) {
                               
                    if (err)
                        // console.log(err)
                      return res.status(500).send(err);
                            database.query("INSERT INTO store_info (store_name,manager_name,location,logo) VALUES ('" + store_name + "','" + manager_name + "','" + location + "','" + img_name + "')",
                            (err, result) => {
                                if(!err)
                                    res.send(result)
                                else
                                    res.send("error")
                            }
                            );
   
                         });
            } else {
              console.log("This format is not allowed , please upload file with '.png','.gif','.jpg'");
            }
     }
});
    
module.exports = app;