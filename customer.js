const mongoose = require("mongoose");
const mySchema=new mongoose.Schema({
 
    email:{
        type:String,
        required:true,
        
    },
    username:{
        type:String,
     required:true,
        
    },   

    issue:{
        type:String,
        required:true
    },
    msg:{
type:String,
required:true
    },
   
phone:{type:Number}
})

const Cust_care=new mongoose.model("custcare",mySchema);
module.exports=Cust_care;