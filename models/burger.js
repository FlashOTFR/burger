'use strict';

const orm = require('../configuration/orm');

const burger = {
    all: function (cb) {
        orm.selectAll('burger', (result) => {
            cb(result);
        });
    },
    create: function (newValue, cb) {
        orm.insertOne('burger', newValue, (result) => {
            cb(result);
        });
    },
    updateDevour: function (burgerId, cb) {
        orm.updateDevour('burger', burgerId, (result) => {
            cb(result);
        });
    },
    deleteOne: function (burgerId, cb) {
        orm.deleteOne('burger', burgerId, (result) => {
            cb(result);
        })
    }
};

module.exports = burger;