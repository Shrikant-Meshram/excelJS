const express = require('express')
const router = express.Router()
const custControoler = require ("../controller/cutomerController")

router.post("/cutomer",custControoler.createData)
router.get('/getData',custControoler.getData)

module.exports= router