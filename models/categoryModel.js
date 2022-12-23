const mongoose = require('mongoose');

const categoryModel = new mongoose.Schema({
    category:{
        type:String
    }
})

const categoryData = mongoose.model("category",categoryModel);
module.exports = categoryData