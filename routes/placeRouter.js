const express = require('express');
const router = express.Router();
const placeHelper = require('../helpers/placeHelper')

router.get('/',(req,res)=>{
    placeHelper.showAllPlace().then((response)=>{
        res.json({data:response})
    })
})
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    placeHelper.showOnePlace(id).then((response)=>{
        res.json({data:response})
    })
})
router.post('/add',(req,res)=>{
    console.log(req.body.visitTime.summer.start);
    placeHelper.addPlace(req.body).then((response)=>{
        res.json({success:response})
    })
})
router.post('/edit/:id',(req,res)=>{
    let id = req.params.id
    placeHelper.editPlace(id,req.body).then((response)=>{
        res.json({data:response})
    })
})
router.get('/remove/:id',(req,res)=>{
    let id = req.params.id
    placeHelper.removePlace(id).then((response)=>{
        res.json({data:response})
    })
})

module.exports = router;