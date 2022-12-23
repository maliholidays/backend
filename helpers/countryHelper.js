const express = require('express');
const countryModel = require('../models/countryModel')
const {ObjectID} = require('bson');

module.exports = {
    AddCountry:(data)=>{
        return new Promise((resolve,reject)=>{
            let CountryData = new countryModel({
                country:data.country
            })
            CountryData.save().then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error);
            })
        })
    },
    GetAllCountry:()=>{
        return new Promise(async(resolve,reject)=>{
            await countryModel.find().then((data)=>{
                resolve(data)
            }).catch((error)=>{
                reject(error)
            })
        })
    },
    GetCountry:(id)=>{
        return new Promise((resolve,reject)=>{
            countryModel.findById({_id:(ObjectID(id))}).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    updateCountry:(id,data)=>{
        return new Promise(async(resolve,reject)=>{
             countryModel.findByIdAndUpdate(id,{
                country:data.country
            }).then((data)=>{
                 resolve(data)
            }).catch((err)=>{
                reject(err);
                
            });
        })
    },
    removeCountry:(id)=>{
        return new Promise((resolve,reject)=>{
            countryModel.findByIdAndDelete(id).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}