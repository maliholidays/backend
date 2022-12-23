const express = require('express');
const router = express.Router();
const packageHelper = require('../helpers/packageHelper')

router.get('/',(req,res)=>{
    packageHelper.getAllPackage().then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err);
    })
})
router.get('/detail/:id',(req,res)=>{
    let id=req.params.id;
    packageHelper.getPackage(id).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err);
    })
})
router.post('/add',(req,res)=>{
    // console.log(req.body);
    packageHelper.addPackage(req.body).then((response)=>{
        console.log(err);
    })
})
router.post('/edit/:id',(req,res)=>{
    let id = req.params.id
    packageHelper.editPackage(id,req.body).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err);
    })

    
})
router.get('/remove/:id',(req,res)=>{
    let id = req.params.id
    packageHelper.removePackage(id).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err);
    })
    
})

module.exports = router;