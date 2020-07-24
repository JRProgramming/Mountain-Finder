const request = require('postman-request');
module.exports = id => {
    return new Promise((resolve, reject) => {
        request({url: `https://skimap.org/SkiAreas/view/${id}.json`, json: true}, (error, response, body) => {
            if (error || !body) return reject('Could not find mountain');
            let { 
                name, 
                run_count: runCount, 
                opening_year: openingYear,
                hourly_lift_capacity: hourlyLiftCapacity,
                official_website: website,
                longest_run: longestRun,
                skiable_acreage: skiableAcreage,
                annual_snowfall: annualSnowfall,
                night_skiing: nightSkiing,
                operating_status: operatingStatus,
                latitude,
                longitude,
                top_elevation: topElevation,
                bottom_elevation: bottomElevation,
            } = body;
            topElevation = (topElevation*3.281).toFixed(1);
            bottomElevation = (bottomElevation*3.281).toFixed(1);
            longestRun = (longestRun*3.281).toFixed(1);
            annualSnowfall = (annualSnowfall*3.281).toFixed(1);
            let mountainData = {
                name,
                runCount,
                openingYear,
                hourlyLiftCapacity,
                website,
                longestRun,
                skiableAcreage,
                annualSnowfall,
                nightSkiing,
                operatingStatus,
                latitude,
                longitude,
                topElevation,
                bottomElevation
            };
            mountainData.elevationDifference = topElevation && bottomElevation ? (Number(topElevation) - Number(bottomElevation)).toFixed(1) : null;
            mountainData.image = body.ski_maps[0] ? body.ski_maps[0].media.image.url : null;
            resolve(mountainData);
        });
    });
}