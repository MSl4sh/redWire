const express = require("express");

const userRouter = express.Router();


userRouter.route('/')
    .get((req,res)=> {res.sendStatus(501);})

userRouter.route('/:id')
    .get((req,res)=> {res.sendStatus(501);})
    .put((req,res)=> {res.sendStatus(501);})
    .delete((req,res)=> {res.sendStatus(501);})

module.exports = userRouter