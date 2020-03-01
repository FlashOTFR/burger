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

//export router