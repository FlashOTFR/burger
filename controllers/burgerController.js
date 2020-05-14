'use strict';

const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
  burger.all(function (data) {
      const hbsObj = {
          burgersArr: data
      };
      res.render('index', hbsObj);
      console.log(hbsObj);
  });
});

router.post('/api/burger', (req, res) => {
  burger.create(req.body.burgerName, function (result) {
      res.json({ id: result.insertId });
  });
});

router.put('/api/burger/devour', (req, res) => {
  burger.updateDevour(req.body.id, function (result) {
      if (result.changedRows === 0) {
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  });
});

router.delete('/api/burger/:id', (req, res) => {
  burger.deleteOne(req.body.id, function (result) {
      if (result.affectedRows == 0) {
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  });
});



module.exports = router;