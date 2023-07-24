const express=require('express');
const Product=require('../models/product')
const { default: mongoose } = require('mongoose');
const User = require('../models/user');

const router=express.Router();

router.get("/products", async(req, res)=>{

    console.log("in product router")

    let products=await Product.find({});

    console.log(products);
    res.json({"products":products}) 

})

router.post("/product",async(req,res)=>{
    console.log(res.body)

    let product=new Product(req.body.product);
    console.log(product);

    let userdetails=req.body.user

    let existing_product=await Product.find({productname:product.productname})
    console.log("Product"+existing_product)

    let user=await User.findOne({username:userdetails.username})

    console.log("user"+user)

    if(user!=null && user.role.toLowerCase()=="admin" && existing_product.length==0){

        product.save();
        res.json({
            statusCode:200,
            statusMessage:"Product added successfully",
            errorMessage:null,
            data:product
    
        })

    }else if(existing_product.length>0){

        res.json({
            statusCode:400,
            statusMessage:"Productname already exists",
            errorMessage:null,
            data:[]
    
        })

    }else{
        res.json({
            statusCode:401,
            statusMessage:"Not enough permissions",
            errorMessage:null,
            data:[]
    
        })
    }

   

})

module.exports = router;

    