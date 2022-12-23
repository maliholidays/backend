const express = require('express');
const vehicleModel = require('../models/vehicleModel');

module.exports = {
    addVehicle:(body)=>{
        return new Promise((resolve,reject)=>{
            let addData = new vehicleModel({
                name:body.name,
                type:body.type,
                AirCondition:body.AirCondition,
                seat:body.seat,
                pushback:body.pushback,
                description:body.description,
                image:body.image,
            })
            addData.save().then((response)=>{
                resolve(response)
            }).catch((err)=>{
                reject(new Error(err))
            })
        })
    },
    getAllVehicle:()=>{
        return new Promise((resolve,reject)=>{
            vehicleModel.find().then((response)=>{
                resolve(response);
            }).catch((err)=>{
                reject(new Error(err))
            })
        })
    },
    getOnevehicle:(id)=>{
        return new Promise((resolve,reject)=>{
            vehicleModel.findById(id).then((response)=>{
                resolve(response);
            })
            .catch((err)=>{
                reject(new Error(err))
            })
        })
    },
    editVehicle:(id,body)=>{
        return new Promise((resolve,reject)=>{
            vehicleModel.findByIdAndUpdate(id,{
                name:body.name,
                type:body.type,
                AirCondition:body.AirCondition,
                seat:body.seat,
                pushback:body.pushback,
                description:body.description,
                image:body.image,
            }).then((response)=>{
                resolve(response)
            })
            .catch((err)=>{
                reject(new Error(err))
            })
        })
    },
    removeVehicle:(id)=>{
        return new Promise((resolve,reject)=>{
            vehicleModel.findByIdAndDelete(id).then((response)=>{
                resolve(response)
            }).catch((err)=>{
                reject(new Error(err))
            })
        })
    }
}