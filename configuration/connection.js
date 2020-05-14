'use strict';

const mysql = require('mysql');

const connection = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '5eku+aya',
    database: 'burger_db'
};

let db;

if (process.env.JAWSDB_URL) {
     db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    db = mysql.createConnection(connection);
};

db.connect(err => {
    if (err) {
        console.error('error connecting', err.stack);
        return;
    }
    console.log(`connected with id ${db.threadId}`);
});

module.exports = db;