const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FiYXJpc2hzYWJhcmkiLCJhIjoiY2sxdWV0bjd0MGk0MTNjbzBqb3QxYnhkOSJ9.eS-4s3S1d4OTizd_6lLALg&limit=1'

    request({url: url,json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find Location. Try another saerch', undefined)
        } else {
            callback(undefined, {
                latitude  : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location  : body.features[0].place_name
            })
        }
    })
}





module.exports = geocode