const request = require('postman-request');
module.exports = (longitude, latitude, mountainData) => {
    return new Promise((resolve, reject) => {
        url = `http://api.weatherstack.com/current?access_key=388c61a3c58ae79537d78146d80ef38d&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}&units=f`;
        request({url: url, json: true}, (error, response) => {
            if(error || response.body.error) return reject('Data for Mountain: ', mountainData);
            ({ temperature: mountainData.temperature, weather_descriptions: mountainData.weather } = response.body.current);
            resolve(mountainData)
        });
    });
    
}