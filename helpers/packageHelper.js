const express = require('express');
const packageModel = require('../models/packageModel')

module.exports={
    addPackage:(body)=>{
        return new Promise(async (resolve,reject)=>{
            const packageData = new packageModel({
                name:body.name,
                state:body.state,
                country:body.country,
                category:body.category,
                description:body.description,
                duration:{
                    days:body.duration.days,
                    night:body.duration.night
                },
                duration:body.duration,
                plan:body.plan,
                placesVisits:body.placesVisits,
                image:body.image,
                
            })
            await packageData.save().then((response)=>{
                resolve(response._id);
            })
        })
    },
    getAllPackage:()=>{
        return new Promise((resolve,reject)=>{
            packageModel.find().then((response)=>{
                resolve(response)
            }).catch((err)=>{
                reject(new Error("asfgsdfhsdgasj"))
            })
        })
    },
    getPackage:(id)=>{
        return new Promise((resolve,reject)=>{
            packageModel.findById(id).then((response)=>{
                resolve(response)
            }).catch((err)=>{
                reject(new Error(err))
            })
        })
    },
    editPackage:(id,body)=>{
        return new Promise((resolve,reject)=>{
            let package = packageModel.findById(id)
            if(!package){
                return reject(new Error("package not found"))
            }
            packageModel.findByIdAndUpdate(id,{
                name:body.name,
                state:body.state,
                country:body.country,
                category:body.category,
                description:body.description,
                duration:{
                    days:body.duration.days,
                    night:body.duration.night
                },
                duration:body.duration,
                plan:body.plan,
                placesVisits:body.placesVisits,
                image:body.image,
            }).then((response)=>{
                resolve(response)
            }).catch((err)=>{
                reject(new Error(err))
            })

        })
    },
    removePackage:(id)=>{
        return new Promise((resolve,reject)=>{
            packageModel.findByIdAndDelete(id).then((response)=>{
                resolve(response)
            }).catch((err)=>{
                reject(new Error(err))
            })
        })
    }
    
}