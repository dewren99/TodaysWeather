const request = require('request')

const url = 'https://api.darksky.net/forecast/2fcd47c18a1f736eefdf8c451e925067/37.8267,-122.4233'

request({url: url, json: true}, (error, response)=>{
    //console.log(response.body.currently)
    console.log('Currently ' + response.body.currently.temperature + ' Degree and ' + response.body.currently.precipProbability  + '% chance of rain')
})