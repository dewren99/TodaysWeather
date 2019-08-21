const path = require('path')
const express = require('express')
const  hbs = require('hbs')
const geocode = require('./utilities/geocode')
const forecast = require('./utilities/forecast')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))


app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req,res) =>{
    res.render('index',{
        title: 'Todays Weather',
        name: 'Deniz Evrendilek'
    })
})

app.get('/about', (req,res) =>{
    res.render('about',{
        title: 'About',
        name: 'Deniz Evrendilek'
    })
})

app.get('/help', (req,res) =>{
    res.render('help',{
        title: 'Help',
        name: 'Deniz Evrendilek'
    })
})


app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'Provide Address!'
        })
    }
    geocode(req.query.address,(error, {latitude, longitude, location} = {})=>{
        if(error)
        {
            return res.send({error})
        }
        forecast(latitude,longitude,(error, forecastData)=>{
            if(error)
            {
                return res.send({error})
            }
            res.send({
                forecast: forecastData, 
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide search term'
        })
    }
    res.send({
    products: []
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404', {
        title: '404',
        name: 'Deniz Evrendilek',
        error: 'This help page not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404', {
        title: '404',
        name: 'Deniz Evrendilek',
        error: 'Page not found'
    })
})

app.listen(port, () =>{
    console.log('server at ' + port)
})









