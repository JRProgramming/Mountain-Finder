const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
router.get('/', (req, res, next) => {
    fs.readFile(path.join(__dirname, '../public/data/mountains.txt'), (error, body) => {
      if (error) return res.status(500).send('The server could not find the file');
      return res.send(body.toString().split('\n'));
    })
});
module.exports = router;
