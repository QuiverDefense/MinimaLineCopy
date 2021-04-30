var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 3005;

//allow access of rest api for cross-origin resource sharing
app.use(cors());

//allow api for parsing json
app.use(express.json());

//allow api to receive data from client app
app.use(express.urlencoded ({
    extended: true
}));

//Register routes in main index.js

//http://localhost:3005/

app.get('/', (req,res) => {
    res.send("Yey backend!");
});

app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}`);
});