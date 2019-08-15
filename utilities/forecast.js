const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url ='https://api.darksky.net/forecast/2fcd47c18a1f736eefdf8c451e925067/'+ latitude +',' + longitude

    request({url:url, json: true}, (error,response)=>{
        if(error){
            callback('Unable to connect the services!', undefined)
        }
        else if(response.body.error){
            callback('Unable to find the location!', undefined)
        }
        else{
            callback(undefined,'Currently ' + response.body.currently.temperature + ' Degree and ' + response.body.currently.precipProbability  + '%' + ' chance of rain')
        }
    })
}

module.exports = forecast