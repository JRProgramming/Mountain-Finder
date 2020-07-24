const request = require('postman-request');
module.exports = (longitude, latitude, mountainData) => {
    return new Promise((resolve, reject) => {
        url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(longitude)},${encodeURIComponent(latitude)}.json?types=address&access_token=pk.eyJ1IjoianJhbWlyZXoyNiIsImEiOiJjazh2cjc3M3gwb254M2pudjdldzlvenBkIn0.riep1hpptcWrUjJyGJIGxw&limit=1`;
        request({ url, json: true}, (error, { body } = {}) => {
            if(error || body.features.length === 0) return reject(mountainData);
            ({place_name: mountainData.address } = body.features[0]);
            const locationInfo = body.features[0].context
            const country = locationInfo.find(info => {
                if (info.id.includes('country')) return info
            });
            mountainData.country = country.text;
            resolve(mountainData);
        });
    });
}