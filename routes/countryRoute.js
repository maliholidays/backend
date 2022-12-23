const express = require('express');
const router = express.Router();
const countryHelper = require('../helpers/countryHelper')

router.get('/',(req,res)=>{
    countryHelper.GetAllCountry().then((response)=>{
        res.json({data:response})
    }).catch((err)=>{
        console.log(err);
    })
})
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    countryHelper.GetCountry(id).then((response)=>{
        res.json({data:response})
    }).catch((err)=>{
        console.log(err);
    })

})
router.post('/add',(req,res)=>{
    countryHelper.AddCountry(req.body).then((response)=>{
        res.json(({success:true}))
    }).catch((err)=>{
        console.log(err);
    })
})
router.post('/edit/:id',(req,res)=>{
    let id = req.params.id;
    countryHelper.updateCountry(id,req.body).then((response)=>{
        res.json({data:response})
    }).catch((err)=>{
        console.log(err);
    })
})
router.get('/remove/:id',(req,res)=>{
    let id = req.params.id;
    countryHelper.removeCountry(id).then((response)=>{
        res.json({data:response})
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;