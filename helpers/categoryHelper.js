const express = require("express");
const CategoryModel = require("../models/categoryModel");
const { ObjectID } = require("bson");

module.exports = {
  AddCategory: (data) => {
    return new Promise(async (resolve, reject) => {
      console.log(data);
      const categoryData = await new CategoryModel({
        category: data.category,
      });
      categoryData
        .save()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  ShowAllCategory: () => {
    return new Promise(async(resolve, reject) => {
      CategoryModel.find().then((response) => {
        resolve(response);
      }).catch((error) => {
        console.log(error);
      });
    });
  },
  getCategory:(id)=>{
    return new Promise((resolve,reject)=>{
      CategoryModel.findById(id).then((response)=>{
        resolve(response)
      }).catch((error) => {
        console.log(error);
      });
    })
  },
  editCategory: (id, data) => {
    return new Promise(async (resolve, reject) => {
      await CategoryModel.findOneAndUpdate(
        { _id: ObjectID(id) },
        { category: data.category }
      ).then((response) => {
        resolve(response);
      }).catch((error) => {
        console.log(error);
      });
    });
  },
  DeleteCategory: (id, data) => {
    return new Promise(async (resolve, reject) => {
      await CategoryModel.findByIdAndDelete(
        { _id: ObjectID(id) },
        { cateogory: data.category }
      ).then((response) => {
        resolve(response);
      }).catch((error) => {
        console.log(error);
      });
    });
  },
};
