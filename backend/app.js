//dont mind this, this is just sample for our practice

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//sample code
const users = [
    {name: 'Kelvin', age: 22},
    {name: 'Seth' , age: 22},
    {name: 'Karren', age: 22}
];

//sample code
const posts = [
    {title: 'My favorite food is pizza'},
    {title: 'My favorite game is puyo'}
];
    
//if localhost:3000/ is placed on link 
//note req = request, res = resources are two parameters
app.get('/', (req,res) =>{
    res.send("hello");
});

//if localhost:3000/users is place on link, access const users
app.get('/users',(req,res) =>{
    res.send(users);
});

//:name is dynamic, value can be different everytime
//find a specific name, and if none, print 'Not found'
app.get('/users/:name', (req,res) => {
    const { name } = req.params;
    const user = users.find((user) => user.name === name);
    if (user) {
        res.status(200).send(user);
    }
    else {
        res.status(404).send('Not Found')
    }
});

//find a specific post with the query
app.get('/posts', (req,res) => {
    console.log(req.query)
    const { title } = req.query;
    if (title) {
        const post = posts.find((post) => post.title === title);
        if (post){
            res.status(200).send(post);
        }
        else {
            res.status(404).send('Not Found')
        }
    res.status(200).send(posts);
    }
});

//post (push data into array)
app.post('/',(req,res) => {
    console.log(req.body)
    const user = req.body;
    users.push(user);
    res.status(201).send('Created User')
});

//authentication to make sure data sent using post is valid data
app.post('/posts', (req,res) => {
    const { authorization } = req.headers;
    if (authorization && authorization === '123'){
        const post = req.body;
        console.log(post);
        posts.push(post);
        res.status(201).send(post);
    } else {
        res.status(403).send('Forbidden');
    }
});

//listen if port the port is accessed
app.listen(3000, () => {
    console.log('Server is running on Port 3000');
});

