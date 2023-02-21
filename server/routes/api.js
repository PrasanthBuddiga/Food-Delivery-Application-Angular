
const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const User=require('../models/user');
const jwt=require('jsonwebtoken');

const db='mongodb+srv://prasanthbuddiga:tSolerAA78422@onlyorganic.zyakqjb.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);
mongoose.connect(db,(err)=>{
    if(err){console.log("error connecting to db:", err)}
    else {console.log("Connected to DB")}
})

//**********This verifyToken can be used to verify if the incoming request contains valid bearer token************//

// router.get('/someRoute',verifyToken,(req,res)=>{})

// function verifyToken(req,res,next){
  
//     if(!req.headers.autherization){
//         return res.status(401).send('Unauthorised request');
//     }
//     let token=req.headers.autherization.split(' ')[1];
//     if(token==='null'){
//         return res.status(401).send('Unauthorised request')
//     }
//     let payload=jwt.verify(token,'secretKey')
//     if(!payload){
//         return res.status(401).send('Unauthorised request')
//     }
//     req.userId=payload.subject;
//     next();

// }

router.get('/',(req,res)=>{
    res.send("from the API")
})

router.post('/register',(req,res)=>{
    let userData=req.body;
    User.findOne({email:userData.email},(error,user)=>{
        if(error){console.log(error)}
        else if (!user){
            let user=new User(userData);
            user.save((err,registeredUser)=>{
                if(err){
                    console.log(err)
                }
                else{
                    let payload={subject:registeredUser._id};
                    let token=jwt.sign(payload,'secretKey');
                    res.status(200).send({token})
                }
            })
        }
        else {
            res.status(401).send("User already registered")
        }
    })
    
    
})
router.post('/login',(req,res)=>{
    let userData=req.body;
    User.findOne({email:userData.email},(error,user)=>{
        if(error){console.log(error)}
        else if (!user){res.status(401).send('Invalid email/User not found')}
        else if(user.password!==userData.password){res.status(401).send("Wrong password entered")}
        else {

            let payload={subject:user._id};
            let token=jwt.sign(payload,'secretKey')
            res.status(200).send({token});
        }
    })
})
module.exports=router;