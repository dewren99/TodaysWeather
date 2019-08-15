const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url ='https://api.darksky.net/forecast/2fcd47c18a1f736eefdf8c451e925067/'+ latitude +',' + longitude

    request({url:url, json: true}, (error,response)=>{
        if(error){
            callback('Unable to connect the services!', undefined)
        }
        else{
            callback(undefined,{
                summary: response.body.currently.summary,
                degree: response.body.currently.temperature,
                rain_chance: response.body.currently.precipProbability
            })
        }
    })
}

module.exports = forecast