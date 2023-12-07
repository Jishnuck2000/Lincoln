const mongoose=require("mongoose")
const lincolnschema=new mongoose.Schema({

    modelname:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        
    },
    
})
module.exports=mongoose.model("details",lincolnschema)