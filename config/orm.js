'use strict';

const connection = require('./connection');


const orm = {
    
    
    selectAll: function(table, cb) {
        const query = "SELECT * FROM ??;";
        connection.query(query, [table], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },


    insertOne: function(table, column, value) {
        const query = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(query, [table, column, value], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: function(table, column, value, cb) {
        const query = "UPDATE ?? SET ?? WHERE ?;";
        connection.query(query, [table, column, value], (err, res) => {
            if(err) throw err;
            cb(res);
        });
    }

};


module.exports = orm;