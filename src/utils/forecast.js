const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a8841b306d86927e08e2b9c9305087d1/' + latitude + ',' + longitude

    request({
        url: url,
        json: true
    }, (error,  {body}) => {
        if (error) {
            callback('Unable to connect the Service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + 'It is Currently followed by ' + body.currently.temperature + 'degrees out. There is  a ' + body.currently.precipProbability + '% chance of rain')
        }
    })
}

module.exports = forecast