const mongoose = require("mongoose");

const placeModel = new mongoose.Schema({
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
    visitTime:{
        summer:{
            start:{
                type:String
            },
            end:{
                type:String
            }
        },
        monsoon:{
            start:{
                type:String
            },
            end:{
                type:String
            }
        },
        winter:{
            start:{
                type:String
            },
            end:{
                type:String
            }
        }
    },
    placesToVisits:[ 
        {
            name:{
                type:String
            },
            id:{
                type:String
            }
        }
    ],
    image:[ 
        {
            type:String
        }
    ]

})

const placeData = mongoose.model("place",placeModel);

module.exports = placeData;