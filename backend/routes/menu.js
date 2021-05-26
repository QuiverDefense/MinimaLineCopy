var express = require('express');
var app = express();
var database = require('../config/database');

//Add categories to edit menu
app.post('/add-categ', (req,res)=> {
    
    const {name} = req.body
    //console.log(name)
    //console.log(req.body)
    
    database.query("INSERT INTO category (name) VALUES (?)", 
    [name],
    (err, result) => {
        if(!err)
            //console.log(result)
            res.send(result)
        }
    )
    
});

//send category list to frontend for display to edit menu
app.get('/display-category', (req,res) => {
    let sql = 'SELECT * FROM category';

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


//get menu-info from database (product name, price, availability, photo)
app.get('/menu-info', (req,res) => {
    let sql = 'SELECT * FROM menu_info';

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

//to add products to menu (manager side)
app.post('/add-product', (req,res)=> {
    if(req.method == "POST"){
        var post  = req.body;
        var product= post.product;
        var price= post.price;
        var availability= post.availability;

        if (!req.files){
            database.query("INSERT INTO menu_info (product,price,availability) VALUES ('" + product + "','" + price + "','" + availability + "')",
                            (err, result) => {
                                if(!err)
                                    res.send(result)
                                }
                            );
            return res.status(500).send('Insert data into database, but no files were uploaded.');
        }
          
          var file = req.files.photo;
          var img_name = file.name;
          console.log("file uploaded:")
          console.log(file)

             if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"|| file.mimetype == "image/gif" || file.mimetype == "image/svg" || file.mimetype == "image/jpg"){
                                   
                file.mv('public/uploads'+file.name, function(err) {
                               
                    if (err)
                        // console.log(err)
                      return res.status(500).send(err);
                            database.query("INSERT INTO menu_info (product,price,availability,photo) VALUES ('" + product + "','" + price + "','" + availability + "','" + img_name + "')",
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