const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/52aeebf4216a2eae9526418cf4849ad2/' + lat + ',' + long + '?units=us&lang=en';
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to service')
        }else if (body.error){
            callback('Unable to find location')
        }else{
            const current = body.currently
            callback(undefined, body.daily.data[0].summary + ' It is currently '+ current.temperature + 
            ' degrees and there is a '+ current.precipProbability + '% chance of rain. The high is ' + body.daily.data[0].temperatureHigh + ' and the low is '+ body.daily.data[0].temperatureLow + ".")
        }
    })   
}

module.exports = forecast