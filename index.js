const express = require('express'); //import express from node modules
const path = require('path');
const app = express(); // asign express to a variable
const hoganMiddleware = require('hogan-middleware');


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hoganMiddleware.__express);
app.use(express.static(path.join(__dirname, 'public'))); //connected the statis assets to express

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(3000); //3000 its a port number
console.log('Im in the console');
console.log('Server running on http://localhost:3000'); //to check that the server is properly running