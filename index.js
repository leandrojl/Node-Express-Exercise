const express = require('express'); //import express

const app = express(); // asign express to a variable

//http get function
app.get('/',(req, res, next)=>{
    res.send('Hello!');
})

app.listen(3000); //3000 its a port number