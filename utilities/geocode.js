const request = require('request')

const geocode = (adress, callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoiZGV3cmVuOTkiLCJhIjoiY2p6Y2c1eG1qMDRlczNrbnd0bTRlZHEyYyJ9.jk0ze7WIgTbGPqdncD6vqA'

    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect the services!', undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unable to find the location!', undefined)
        }
        else{
            callback(undefined,{
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode