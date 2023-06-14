const express = require("express")
const mongoose = require('mongoose')
const app = express()
const router  = require("./routes/route")

app.use(express.json())
app.use("/",router)
const Port = 5000;
"mongodb://localhost:27017/ShriData"

const dbConnect = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/ShriData", {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })

    .then(()=>{console.log("connection successfull")})
    .catch((err)=>{
        console.log(err.message);
    }) 

}

dbConnect()

app.listen(Port,()=>{
    console.log(`server running on ${Port}`);
})




