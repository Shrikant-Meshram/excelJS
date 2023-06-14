const mongoose = require('mongoose')

const customer = new mongoose.Schema({
    client_number:{
        type:String,
        required: true,

    },
    legal_name:{
       type:String,
       required:true,
       unique:true
    },
    client_type:{
        type:String,
        enum:[ "Customer","Vendor","Both"],
        required: true,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    gstin:{
        type:String,
    },
    pan:{
        type:String,
    }

})

module.exports = mongoose.model("customer",customer)