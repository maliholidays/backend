const mongoose = require('mongoose');

const vehicleModel = new mongoose.Schema({
    name:{
        type:String
    },
    type:{
        type:String
    },
    AirCondition:{
        type:String
    },
    seat:{
        type:String
    },
    pushback:{
        type:String
    },
    description:[
        {
            desc:{
                type:String
            }
        }
    ],
    image:{
        interior:[
            {
                source:{
                    type:String
                }
            }
        ],
        exterior:[
            {
                source:{
                    type:String
                }
            }
        ]
    }
    
})

const vehicleData = mongoose.model('vehicle',vehicleModel)
module.exports=vehicleData;