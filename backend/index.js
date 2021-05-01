var express = require('express');
var app = express();
var cors = require('cors');
var database = require('./config/database');
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
    require('./routes/store-info')
]);

//http://localhost:3005/ (index.js)
//http://localhost:3005/sign-in
//http://localhost:3005/start-page
//http://localhost:3005/store-registration

//testing 1
app.get('/', (req,res) => {
    res.send("yey backend!");
});

//testing2
app.get('/check_check', (req,res) => {
    res.send("yes it works!");
});

app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}`);
});