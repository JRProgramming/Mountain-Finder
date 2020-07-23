const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/:mountain', function(req, res, next) {
    console.log(req.params.mountain);
    res.render('mountain');
});

module.exports = router;
