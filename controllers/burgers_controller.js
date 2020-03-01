'use strict';

const express = require('express');
const burger = require('../models/burger.js');


//router
const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(function(data) {
const allBurgs = {
    burgers: data
};
res.render("index", allBurgs);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(req.params.id, function(result) {
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id",(req, res) => {
    const condition =  'id = ' + req.params.id;
    let state;
    if(req.body.devoured === 'true') {
        state = false;
    }else {
        state = true;
    }
    burger.updateOne(
        {
            devoured: state
        },
        condition,
        (result) => {
            if (result.affectedRows == 0){
                return res.status(404).end();
            }else {
                res.status(200).end();
            }
        }
    );
});

//export router