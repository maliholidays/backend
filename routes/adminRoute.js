const express = require('express');
const router = express.Router();
const userHelper = require('../helpers/adminHelper')

router.get('/',(req,res)=>{
    res.json({success:true})
})
router.post('/add',(req,res)=>{
    res.json({success:true})
})
router.post('/edit',(req,res)=>{
    res.json({success:true})
})
router.get('/remove',(req,res)=>{
    res.json({success:true})
})

module.exports = router;