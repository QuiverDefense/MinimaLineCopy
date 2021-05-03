var express = require('express');
var app = express();
var cors = require("cors");
var database = require('./config/database');
// var bodyParser = require('body-parser');
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
    (err, res) => {
        console.log(err);
        }
    );
});

//authentication for user-login
app.post('/user-login', (req,res)=> {
    
    const username=req.body.username;
    const password=req.body.password;

    database.query(
        "SELECT * FROM account_info WHERE username = ? AND password = ?", 
    [username, password], 
    (err, result) => {
        if(err){
            res.send({err: err})
        } 

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({message: "Wrong username and/or password!"});
        }
    });
});

app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}`);
});
