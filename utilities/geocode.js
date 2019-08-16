const request = require('request')

const geocode = (adress, callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoiZGV3cmVuOTkiLCJhIjoiY2p6Y2c1eG1qMDRlczNrbnd0bTRlZHEyYyJ9.jk0ze7WIgTbGPqdncD6vqA'

    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect the services!', undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find the location!', undefined)
        }
        else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode