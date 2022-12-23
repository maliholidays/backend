const { response } = require('express');
const express = require('express');
const router = express.Router();
const categoryHelper = require('../helpers/categoryHelper')

router.get('/',(req,res)=>{
    categoryHelper.ShowAllCategory().then((response)=>{
        res.json({response:response})
    })
    .catch((err)=>{
        console.log(err);
    })
})
router.get('/detail/:id',(req,res)=>{
    let id = req.params.id
    categoryHelper.getCategory(id).then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        console.log(err);
    })
})
router.post('/add',(req,res)=>{
    categoryHelper.AddCategory(req.body).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err);
    })
})
router.post('/edit/:id',(req,res)=>{
    let id = req.params.id;
    categoryHelper.editCategory(id,req.body).then((response)=>{
        res.json({response:response})
    })
    .catch((err)=>{
        console.log(err);
    })
    
})
router.get('/remove/:id',(req,res)=>{
    let id = req.params.id;
    categoryHelper.DeleteCategory(id,req.params.id).then((response)=>{
        res.json({response:response});
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = router;