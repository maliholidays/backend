const express = require('express');
const router = express.Router();
const stateHelper = require('../helpers/stateHelper')

router.get('/',(req,res)=>{
    stateHelper.getAllState().then((response)=>{
        res.json({success:response})
    }).catch((err)=>{
        console.log(err);
    })
})
router.get('/:id',(req,res)=>{
    let id = req.params.id
    stateHelper.getState(id).then((response)=>{
        res.json({success:response})
    }).catch((err)=>{
        console.log(err);
    })
})
router.post('/add',(req,res)=>{
    stateHelper.addState(req.body).then((response)=>{
        res.json({success:response})
    }).catch((err)=>{
        console.log(err);
    })
})
router.post('/edit/:id',(req,res)=>{
    let id = req.params.id;
    stateHelper.updateState(id,req.body).then((response)=>{
         res.json({data:response})
    }).catch((err)=>{
        console.log(err);
    })
})
router.get('/remove/:id',(req,res)=>{
    let id = req.params.id
    stateHelper.removeState(id).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;