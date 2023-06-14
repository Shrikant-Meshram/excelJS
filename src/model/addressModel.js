const mongoose= require('mongoose')

const addressSchema= new mongoose.Schema({
    clientId:{
        type:number 
    },
    addressLine1:{
        type:String 
    },
    addressLine2:{
        type:String 
    },
    city:{
        type :String
    },
    state:{
       type: String
    },
    pincode:{
        type: number 
    }
})


module.exports=mongoose.model('addressDetails',addressSchema)