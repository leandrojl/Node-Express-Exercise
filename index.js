const express = require('express'); //import express
const path = require('path');
const app = express(); // asign express to a variable

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'mustache');
app.engine('mustache', require('hogan-middleware').__express);
//http get function
app.get('/',(req, res, next)=>{
    res.send('Hello!!');
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

app.listen(3000); //3000 its a port number