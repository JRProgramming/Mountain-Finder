const express = require('express');
const request = require('postman-request');
const router = express.Router();

/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    res.render('index', { title: 'Express' });
  })

module.exports = router;
