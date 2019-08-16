const request = require('request')
const geocode = require('./utilities/geocode.js')
const forecast = require('./utilities/forecast.js')

const user_location = process.argv[2]

if(!user_location){
    console.log('Undefined Adress!')
}
else{
    geocode(user_location, (error,{latitude, longitude, location})=>{
        if(error)
        {
            return console.log(error)
        }
        forecast(latitude, longitude, (error,forecast_data)=>{
            if(error)
            {
                console.log(error)
            }
            console.log(location)
            console.log(forecast_data)
        })
    })
}




