const mongoose=require('mongoose');

let productSchema=new mongoose.Schema({
    productname:{type:String,required:true},
    price :{type:String,required:true},
    description:{type:String,required:true},
    deleted:{type:Boolean,default:false},
    productimage:{type:String,default:null}


})

let Product=mongoose.model("Product", productSchema);

module.exports=Product;
