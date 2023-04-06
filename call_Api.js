const express = require('express');
const dbconnect = require('./dcon');
const app = express();

app.get('/', async(req,res)=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data)
    res.send(data);
})

app.listen(8083,()=>{
    console.log("server listing on port 8083");
})

