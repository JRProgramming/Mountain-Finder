const express = require('express');
const fs = require('fs');
const path = require('path');
const getMountain = require('../utils/getmountain');
const getLocation = require('../utils/getlocation');
const getWeather = require('../utils/getweather');
const router = express.Router();
router.get('/:id?', async (req, res) => {
    if (!req.params.id) res.redirect('/');
    let id = req.params.id;
    try {
        let mountainData = await getMountain(id);
        mountainData = await getLocation(mountainData.longitude, mountainData.latitude, mountainData);
        mountainData = await getWeather(mountainData.latitude, mountainData.latitude, mountainData);
        res.render('mountain', mountainData);
    } catch (error) {
        if (typeof error === 'object') {
            return res.render('mountain', error);
        }
        return res.status(500).send(error);
    }
});

module.exports = router;