const mongoose=require('mongoose');

let userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    mobile:{type:String,required:true},
    email:{type:String,required:true},
    deleted:{type:String,default:false},
    role:{type:String,required:true}


})

let User=mongoose.model("User", userSchema);

module.exports=User;
