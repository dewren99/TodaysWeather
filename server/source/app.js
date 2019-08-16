const path = require('path')
const express = require('express')

//console.log(__dirname)
//console.log(path.join(__dirname, '../public'))

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.get('/weather', (req,res)=>{
    res.send('weather')
} )

app.listen(3000, () =>{
    console.log('server at 3000')
})














