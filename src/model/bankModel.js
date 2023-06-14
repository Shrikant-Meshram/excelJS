const mongoose  = require('mongoose')

const bankSchema = new mongoose.Schema({
    ClientId:{
        type:String,
    },
    bankName:{
        type:String,
    },
    IFSC:{
        type:Number,
    },
    accountNumber:{
        type: Number,
    },
    accountHolder:{
        type:String
    },
    accountType:{
        type:String,
    },
    branchName:{
        type:String,
    }
})


module.exports = mongoose.model('banksDetail',bankSchema)