const { response } = require('express');
const express = require('express');
const placeModel = require('../models/placeModel')

module.exports={
    addPlace:(body)=>{
        return new Promise((resolve,reject)=>{
            const placeData = new placeModel({
                name:body.name,
                state:body.state,
                country:body.country,
                category:body.category,
                description:body.description,
                visitTime:{
                    summer:{
                        start:body.visitTime.summer.start,
                        end:body.visitTime.summer.start
                    },
                    winter:{
                        start:body.visitTime.winter.start,
                        end:body.visitTime.winter.start
                    },
                    monsoon:{
                        start:body.visitTime.monsoon.start,
                        end:body.visitTime.monsoon.start
                    }
                },
                placesToVisits:body.placesToVisits,
                image:body.image,
                // description:description.push(body.description),
                // packages:packages.push(body.packages),
                // placesVisits:placesVisits.push(body.placeVisits),
                // image:image.push(body.image),
                
            })
            placeData.save().then((response)=>{
                resolve(response);
            })
        })
    },
    showAllPlace:()=>{
        return new Promise((resolve,reject)=>{
            placeModel.find().then((response)=>[
                resolve(response)
            ])
        })
    },
    showOnePlace:(id)=>{
        return new Promise((resolve,reject)=>{
            placeModel.findById(id).then((response)=>{
                resolve(response)
            })
        })
    },
    editPlace:(id,body)=>{
        return new Promise((resolve,reject)=>{
            placeModel.findByIdAndUpdate(id,{
                name:body.name,
                state:body.state,
                country:body.country,
                category:body.category,
                description:body.description,
                visitTime:{
                    summer:{
                        start:body.visitTime.summer.start,
                        end:body.visitTime.summer.end
                    },
                    winter:{
                        start:body.visitTime.winter.start,
                        end:body.visitTime.winter.end
                    },
                    monsoon:{
                        start:body.visitTime.monsoon.start,
                        end:body.visitTime.monsoon.end
                    }
                },
                placesToVisits:body.placesToVisits,
                image:body.image,
            }).then((response)=>{
                resolve(response)
            })
        })
    },
    removePlace:(id)=>{
        return new Promise((resolve,reject)=>{
            placeModel.findByIdAndDelete(id).then((response)=>{
                resolve(response)
            })
        })
    }
}