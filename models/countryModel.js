const mongoose = require('mongoose');

const countryModel = new mongoose.Schema({
    country:{
        type:String

    }
})
const countryData = mongoose.model("country",countryModel);

module.exports = countryData;