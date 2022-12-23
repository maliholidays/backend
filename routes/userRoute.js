const { json } = require('express');
const express = require('express');
const router = express.Router();
const userHelper = require('../helpers/userHelper')

router.get('/',(req,res)=>{
   userHelper.getUsers().then((response)=>{
        res.json(response)
   }).catch((err)=>{
    console.log(err.message);
})
})
router.post('/signin',(req,res)=>{
    userHelper.userSignup(req.body).then((response)=>{
        res.json({success:response})
    }).catch((err)=>{
        console.log(err.message);
    })
})
router.get("/profile/:id",(req,res)=>{
    let id = req.params.id
    userHelper.getOneUser(id).then((response)=>{
        res.json(response);
    })
    .catch((err)=>{
        console.log(err.message);
    })
})
router.post('/login',(req,res)=>{
    console.log(req.body);
    userHelper.login(req.body).then((response)=>{
        res.json(response);
    })
    .catch((err)=>{
        console.log(err);
    })
})
router.post('/edit/:id',(req,res)=>{
    let id = req.params.id
    userHelper.editUser(id,req.body).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err.message);
    })
})
router.get('/remove/:id',(req,res)=>{
    let id = req.params.id;
    userHelper.removeUser(id).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err.message);
    })
})

module.exports = router;