const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    packages:[
        {
            
            type:String
            
        }
    ],
    places:[
        {
            type:String
        }
    ],
    address:{
        type:String
    },
    number:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        default:"Customer"
    }
})

const userData = mongoose.model('user',UserModel);
module.exports = userData