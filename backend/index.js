var express = require('express');
var app = express();
var cors = require("cors");
var database = require('./config/database');
var upload = require('express-fileupload');
var port = process.env.PORT || 3005;

//Connect to database
database.connect((err) => {
    if (err) throw err;
});


//allow access of rest api for cross-origin resource sharing
app.use(cors());

//allow api for parsing json
app.use(express.json());

//allow api to receive data from client app
app.use(express.urlencoded ({
    extended: true
}));

app.use(upload());


//Register routes in main index.js

app.use('/', [
    require('./routes/store-info'),
    require('./routes/account-info')
]);

//http://localhost:3001/ (index.js)
//http://localhost:3001/sign-in
//http://localhost:3001/start-page
//http://localhost:3001/store-registration

//to register user and store info in account_info table
app.post('/user-registration', (req,res)=> {
    
    const {username,email,password}=req.body

    database.query("INSERT INTO account_info (username, email, password) VALUES (?,?,?)", 
    [username, email, password], 
    (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send("username/email already used")
        }
    )
    
});

//authentication for user-login
app.post('/user-login', (req,res)=> {

    const {username,password}=req.body

    database.query(
        "SELECT * FROM account_info WHERE username = ? AND password = ?", 
    [username, password], 
    (err, result) => {
        if(err){
            res.send({err: err})
        } 

        if (result.length > 0) {
            console.log('yes')
            res.send(result)
        } else {
            res.send({message: "Wrong username and/or password!"});
        }
    });
});

//for store-registration
app.post('/store-registration', (req,res)=> {
    
    const {store_name,manager_name,location} = req.body
    const logo = req.files

    console.log(req.body)
    console.log(req.files)

    database.query("INSERT INTO store_info (store_name, manager_name, location, logo) VALUES (?,?,?,?)", 
    [store_name, manager_name, location, logo], 
    (err, result) => {
        if(!err)
            res.send(result)
            // if(result===logo){

            // }
        }

    )
    
});

app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}`);
});
