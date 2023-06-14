const custModel = require("../model/customerModel")
const mongoose = require("mongoose")
const exceljs= require("exceljs")


const createData = async (req,res)=>{

    try{
      const {fileName, filePath} = req.body
      const excelFile= new Excel()
    }
    catch(err){
        res.send({msg:err.message})
    }
}  

const getData = async (req,res)=>{
    try{
    const userdata = await custModel.find()

    const workbook = new exceljs.Workbook()
    const worksheet = workbook.addWorksheet('My User')

    worksheet.columns =[
        {header:'client_number',key:'client_number',width:10},
        {header:'legal_name',key:'legal_name',width:20},
        {header:'client_type',key:'client_type',width:10},
        {header:'email',key:'email',width:30},
        {header:'phone',key:'phone',width:30},
        {header:'gstin',key:'gstin',width:10},
        {header:'pan',key:'pan',width:30},
    ]

    
    userdata.forEach(user=>{
        const cleanedUser = {
            client_number:user.client_number.replace(/[^-/a-zA-Z-0-9 ]/, '').toUpperCase().trim(),
            legal_name: user.legal_name.replace(/[^a-zA-Z ]/g, '').trim(), 
            client_type: user.client_type.replace(/[^a-zA-Z ]/g, '').trim(), 
            email:user.email.replace(/[^a-zA-Z ]/g, '').trim(),
            phone:user.phone.replace(/[^0-9 ]/g, '').trim(),
            gstin:user.gstin.replace(/[^a-zA-Z ]/g, '').trim(),
            pan:user.pan.replace(/[^a-zA-Z0-9 ]/g, '').toUpperCase().trim(),
          };
        worksheet.addRow(cleanedUser)
    })
    // worksheet.getRow(1).eachCell

   const data= await workbook.xlsx.writeFile('userdata.xlsx')
        res.send({msg:"done"})

    }
    catch(err){
        res.send({msg:err.message})
    }
}

module.exports.createData = createData;
module.exports.getData= getData;