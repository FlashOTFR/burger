'use strict';

const db = require('../configuration/connection');

const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = 'SELECT * FROM ??';
        db.query(queryString, tableInput, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableInput, newValue, cb) {
        const queryString = `INSERT INTO ??(name) VALUES (?)`;
        db.query(queryString, [tableInput, newValue], (err, result) => {
            if (err) throw err;
            console.log(`${result.affectedRows} burgers modified`);
            console.log(`Inserted ${newValue}!!!`);
            cb(result);
        });
    },
    updateDevour: function (tableInput, burger_id, cb) {
        const queryString = `UPDATE ?? SET devoured = TRUE WHERE id = ?;`;
        db.query(queryString, [tableInput, burger_id], (err, result) => {
            if (err) throw err;
            console.log(`${result.affectedRows} burgers modified`);
            console.log(`burger id ${burger_id} has been devoured!`);
            cb(result);
        });
    },
    deleteOne: function (tableInput, burger_id, cb) {
        const queryString = `DELETE FROM ?? WHERE id = ?;`;
        db.query(queryString, [tableInput, burger_id], (err, result) => {
            if (err) throw err;
            console.log(`${result.affectedRows} burgers modified`);
            cb(result);
        });
    }
};

module.exports = orm;
