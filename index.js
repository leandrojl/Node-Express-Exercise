const express = require('express'); //import express from node modules
const path = require('path');
const app = express(); // asign express to a variable
const hoganMiddleware = require('hogan-middlware');


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hoganMiddleware.__express);

//http get function
app.get('/',(req, res, next)=>{
    res.send('This is a new server using Express');
})

//get function for a json object
app.get('/json',(req, res, next)=>{
    const data ={
        greeting: 'Hello!!;',
        goodbye: 'See you later',
        age: 26,
        colleague: new String("Harvard")
    }
    res.json(data);
})

app.get('/home',(req, res, next)=>{
    res.render('home', null);
})

app.listen(3000); //3000 its a port number