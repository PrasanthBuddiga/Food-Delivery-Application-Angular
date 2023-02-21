// import express from 'express'
// import bodyParser from 'body-parser'

const express=require('express');
const bodyParser=require('body-parser');
const api=require('./routes/api');
const cors=require('cors')

const PORT='3000';

const app=express();


app.use(cors())
app.use(bodyParser.json());
app.use('/api',api)


app.get('/',(req,res)=>{
    res.send("Welcome to the server");
})

app.listen(PORT,()=>{
    console.log("Serve is now running on http://localhost:"+PORT)
})