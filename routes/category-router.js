const express = require("express");

const categoryRouter = express.Router();


categoryRouter.route('/')
    .get((req,res)=> {res.sendStatus(501);})
    .post((req,res)=> {res.sendStatus(501);})

categoryRouter.route('/:id')
    .get((req,res)=> {res.sendStatus(501);})
    .put((req,res)=> {res.sendStatus(501);})
    .delete((req,res)=> {res.sendStatus(501);})

module.exports = categoryRouter