var express = require('express');
var app = express();
var bcrypt = require('bcrypt');
var upload = require('express-fileupload');
var cors = require("cors");
var database = require('./config/database');
var port = process.env.PORT || 3005;
//const multer = require('multer');
//const path = require("path");
//var moment = require('moment');

/*
const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function(req, file, cb){
        cb(null,"IMAGE-" + Date.now() +
    path.extname(file.originalname));
    }
});

const uploada = multer({
    storage: storage,
    limits:{fileSize: 1000000},
}).single("myImage");

app.post('/upload', function (req, res) {
    uploada(req, res, function (err) {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file);

        if(!err) {
            return res.send(200).end();
        }
    })
})
*/

//Connect to database
database.connect((err) => {
    if (err) throw err;
});

//allow access of rest api for cross-origin resource sharing
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
}));

//to upload file
app.use(upload());

//allow api for parsing json
app.use(express.json());

//allow api to receive data from client app
app.use(express.urlencoded ({
    extended: false
}));

//Register routes in main index.js
app.use('/', [
    require('./routes/store-info'),
    require('./routes/account-info'),
    require('./routes/menu'),
]);

//http://localhost:3001/ (index.js)
//http://localhost:3001/sign-in
//http://localhost:3001/start-page
//http://localhost:3001/store-registration

app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}`);
});
