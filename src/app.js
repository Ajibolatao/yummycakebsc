const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const app = express()
const port = process.env.PORT || 3000

//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")

//Setup handlesbars engine and view location
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


//Setup directory to serve
app.use(express.static(publicDirectoryPath))


// ROUTES

app.get('/', (req, res) => res.render('index'))

app.get('/roadmap', (req, res) => res.render('roadmap'))

app.get('/whitepaper', (req, res) => res.render('whitepaper'))

app.get("/dashboard", (req, res) => res.render("dashboard"));

app.get('/lottery', (req,res)=>{
    res.render('Ycake lottery',{
        title: 'Ycake',
        name: 'Ycake'
    })
})


app.listen(port, () => {
    console.log('Server is up on port '+port)
})
