//! install express and create an instance of express, and create a PORT 

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const fetch = (...args)=> import('node-fetch').then(({ default: fetch}) => fetch(...args))

app.use(express.static('public'))

//? http://localhost:3000/ 
app.get(`/`, (req, res)=> {
    //* do stuff
    // res.end('My Futurama App!')
    //! .render(path => where are we rendering, obj =< what we are rendering) 
    res.render('pages/home', {
        title: 'My Futurama Homepage',
        name: "Crazpicc's Futurama App!"
    })
})

//? http://localhost:3000/characters
app.get('/characters', (req, res)=> {

    // do stuff
const url = 'https://api.sampleapis.com/futurama/characters'

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        res.render('pages/characters', {
            title: 'Characters',
            name: 'Our list of characters',
            data //data: data
        })
    })
})    
            

//? http://localhost:3000/episodes
app.get('/episodes', (req, res)=> {

    // do stuff
    const url = 'https://api.sampleapis.com/futurama/episodes'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            res.end('Data Received...')
        })
        
    })

app.set('view engine', 'ejs')

//! starting up server
app.listen(PORT, ()=> console.log(`Server is running at http://localhost:${PORT}`)) 