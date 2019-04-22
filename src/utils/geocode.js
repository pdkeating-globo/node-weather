const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicGRrZWF0aW5nIiwiYSI6ImNqdTg4cmRmcTIyaGs0NHIxa21hcWVsangifQ.nQuJ1JBYDVpR-SZyqk0dYg'

    request({url, json: true}, (error, {body}) => {
        const {features} = body
        if(error){
            callback('Unable to connect to location services')
        }else if (features.length === 0){
            callback('Unable to find location. Try another search.')
        }else{
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
}

module.exports = geocode