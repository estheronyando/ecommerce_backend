const express=require('express');
const User=require('../models/user');
const { default: mongoose } = require('mongoose');
const getDatabase=require('../config/db')

const router=express.Router();



router.post("/register", async(req, res)=>{
    console.log("in user router")
    let newUser=new User(req.body);
    console.log(req.body.username)
    console.log(newUser.username)
    let existing_user=await User.find({username:newUser.username});
    if(existing_user.length==0){
        newUser.save();
        res.json({"message":"User Registered Successfully"})
    }else{
    
    res.json({"message":"Username already taken"})
    }
})

router.post("/login", async(req, res)=>{
    
    let user=req.body.username
    let password=req.body.password
    let existing_user=await User.findOne({username:user});
    console.log(existing_user);
    if(existing_user.password == password){
    
        res.json({"message":"Login Successful"})
    }else{
    
    res.json({"message":"Login unsuccessful "})
    }
})

module.exports = router;
 