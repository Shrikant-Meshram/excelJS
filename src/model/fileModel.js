const mongoose= require('mongoose')

const fileSchema= new mongoose.Schema({
   fileName:{
    type:String
   },
   filePath:{
    type:String
   }
})


module.exports=mongoose.model('fileDetails',fileSchema)