const mongoose = require("mongoose")
const dummyschema = new mongoose.Schema({

name:{
    type:String,
    required:true
},
age:{
    type:Number,
    required:true
},

phone_no:{
    type:Number,
    required:true
},
address:{
    type:String,
    required:true
},
pincode:{
    type:Number,
    required:true
},
email:{
    type:String,
    required:true
},

})
module.exports=mongoose.model("infos",dummyschema)