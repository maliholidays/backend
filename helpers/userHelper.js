const express = require('express');
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWTSIGN = "maliholidays45"
module.exports = {
    userSignup:(data)=>{
        return new Promise(async(resolve,reject)=>{
            let userExist = await userModel.findOne({email:data.email})
            if(userExist){
                return reject(new Error("User already exists"))
            }
            const salt = await bcrypt.genSalt(10)
            let hashPassword = await bcrypt.hash(data.password,salt)
            let newUser = new userModel({
                fullname:data.fullname,
                email:data.email,
                number:data.number,
                password:hashPassword
                 
            })
            await newUser.save()
            
            let userId = userModel.findOne({email:data.email})
            const IdData ={
                user:{
                    userId:userId._id
                }
            }
            const AuthToken = await jwt.sign(IdData,JWTSIGN)
            resolve(AuthToken)
        })
    },
    login:(data)=>{
        return new Promise((resolve,reject)=>{
            console.log(data);
            userModel.findOne({email:data.email}).then(async(response)=>{
                console.log("response",response);
                const comparePass = await bcrypt.compare(data.password,response.password)
                if(!comparePass){
                    return reject(new Error("Creditantials are wrong"))
                }
                const UserData={
                    user:{
                        userId:response._id
                    }
                }
                const AuthToken = await jwt.sign(UserData,JWTSIGN);
                resolve(AuthToken)
            }).catch((err)=>{
                reject(new Error(err))
            })
            
            console.log("password",data.password);
           
        })
    },
    getOneUser:(id)=>{
        return new Promise((resolve,reject)=>{
            userModel.findById(id).then((response)=>{
                resolve(response)
            }).catch((err)=>{
                reject(new Error("User not Found"))
            })
        })
    },
    editUser:(id,data)=>{
        return new Promise(async(resolve,reject)=>{
            await userModel.findByIdAndUpdate(id,{
                fullname:data.fullname,
                email:data.email,
                number:data.number,
            }).then((response)=>{
                resolve(response)
            }).catch((err)=>{
                reject(new Error("User updation failed"))
            })
        })
    },
    removeUser:(id)=>{
        return new Promise(async(reolve,reject)=>{
            await userModel.findByIdAndDelete(id).then((response)=>{
                resolve(response)
            }).catch((err)=>{
                reject(new Error("user Not found"))
            })
        })
    },
    getUsers:()=>{
        return new Promise((resolve,reject)=>{
            userModel.find().then((response)=>{
                resolve(response)
            }).catch((err)=>{
                reject(new Error(err))
            })
        })
    }
}