const path = require('path')
const express = require('express')
const  hbs = require('hbs')

//console.log(__dirname)
//console.log(path.join(__dirname, '../public'))

const app = express()

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
    res.send('weather')
} )

app.listen(3000, () =>{
    console.log('server at 3000')
})











