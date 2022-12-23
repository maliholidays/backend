const express = require('express');
const router = express.Router();
const vehicleHelper = require('../helpers/vehicleHelper')

router.get('/',(req,res)=>{
    vehicleHelper.getAllVehicle().then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err);
    })
})
router.get('/Detail/:id',(req,res)=>{
    let id = req.params.id;
    vehicleHelper.getOnevehicle(id).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err);
    })
})
router.post('/add',(req,res)=>{
    vehicleHelper.addVehicle(req.body).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err);
    })
})
router.post('/edit/:id',(req,res)=>{
    let id = req.params.id;
    vehicleHelper.editVehicle(id,req.body).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err);
    })
    
})
router.get('/remove/:id',(req,res)=>{
    let id = req.params.id;
    vehicleHelper.removeVehicle(id).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;