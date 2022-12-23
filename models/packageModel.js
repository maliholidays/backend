const mongoose = require('mongoose');

const packageModel = new mongoose.Schema({
    name:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    category:{
        type:String
    },
    description:[
        {
            type:String
        }
    ],
    duration:{
        days:{
            type:String
        },
        night:{
            type:String
        }
    },
    plan:[
        {
            day:{
                type:String
            },
            places:[{
                type:String
            }],
            thingsToDo:[
                {
                    day:{
                        type:String
                    },
                    description:{
                        type:String
                    }
                }
            ]

        }
    ],
    placesVisits:[
        {
            type:String
        }
    ],
    image:[
        {
            type:String
        }
    ]

})

const packageData = mongoose.model("package",packageModel)
module.exports = packageData;