const { ObjectID } = require("bson");
const express = require("express");
const {
  findByIdAndUpdate,
  findByIdAndDelete,
} = require("../models/countryModel");
const stateModel = require("../models/stateModel");

module.exports = {
  getAllState: () => {
    return new Promise((response, reject) => {
      stateModel
        .find()
        .then((data) => {
          response(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getState: (id) => {
    return new Promise((resolve, reject) => {
      stateModel
        .find({ _id: ObjectID(id) })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  addState: (data) => {
    return new Promise((resolve, reject) => {
      const stateData = new stateModel({
        state: data.state,
      });
      stateData
        .save()
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  updateState: (id, data) => {
    return new Promise(async(resolve, reject) => {
        await stateModel.findByIdAndUpdate(
        { _id: ObjectID(id) },
        {
          state: data.state,
        }
      )
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  removeState: (id) => {
    return new Promise((resolve, reject) => {
        stateModel.findByIdAndDelete(id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
