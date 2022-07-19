require("dotenv-flow").config();
const { MESSAGE, NODE_ENV, PORT}= process.env;

console.log('lancé en', NODE_ENV, ":", MESSAGE);


// création d'un serveur express

const express = require('express');
const app = express();
const router = require('./routes')
// stocker le server dans une variable


// mise en place d'une route temporaire
// app.get('/users', (req,res) =>{
//     const data={
//         msg:"coucou"
//     }
//     res.json(data);
// });
app.use('/api', router);


app.listen(PORT, ()=>{
    console.log (`server up on port=${PORT} [${NODE_ENV}]`);
});