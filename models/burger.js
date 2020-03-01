'use strict';

const orm = require('../config/orm');


const burger = {
    
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    
    
    insertOne: function(column, value, cb) {
        orm.insertOne('burgers', column, value, function(res) {
            cb(res);
        });
    },

    updateOne: function(column, value, cb) {
        orm.update('burgers', column, value, function(res) {
            cb(res);
        })
    }
};
    
  module.exports = burger;  
    
    
    
    
    








