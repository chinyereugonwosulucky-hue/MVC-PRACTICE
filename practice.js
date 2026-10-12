const express = require ('express');
const app = express();

let port = 1234;

app.listen(port, ()=>{
    console.log (`Server running on PORT : ${port}`)
})