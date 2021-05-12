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
// app.post('/store-registration', (req,res)=> {
    
//     const {store_name,manager_name,location}=req.body
    
//     if(!req.files)
//         return res.status(400).send('No files were uploaded')

//     const {logo} = req.files 
//     var img_name = logo.name

//     //console.log(req.files)
//     //console.log(img_name)
//     //console.log(req.body.store_name)
//     //console.log(req.body.location)

//     database.query("INSERT INTO store_info (store_name, manager_name, location, logo) VALUES (?,?,?,?)", 
//     [store_name, manager_name, location, logo],
    
//     (err, result) => {
//         if(!err)
//             res.send(result)
//             }
//         ) 
//     });
app.post('/store-registration', (req,res)=> {
    if(req.method == "POST"){
        var post  = req.body;
        var store_name= post.store_name;
        var manager_name= post.manager_name;
        var location= post.location;

        if (!req.files){
            return res.status(400).send('No files were uploaded.');
        }

          var file = req.files.logo;
        //   console.log(file);
          var img_name = file.name;

          console.log("file uploaded:")
          console.log(file)

             if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                   
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