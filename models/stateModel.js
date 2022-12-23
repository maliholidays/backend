const mongoose = require('mongoose');

const stateModel = new mongoose.Schema({
    state:{
        type:String

    },
    country:{
        type:String
    }
})

const stateData = mongoose.model("state",stateModel);

module.exports = stateData;