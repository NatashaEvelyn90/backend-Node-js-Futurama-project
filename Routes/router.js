const express = require('express')
const router = express.Router()

const fetch = (...args)=> import('node-fetch').then(({ default: fetch}) => fetch(...args))

router.use(express.static('public'))

//? http://localhost:3000/ 
router.get(`/`, (req, res)=> {
    //* do stuff
    // res.end('My Futurama App!')
    //! .render(path => where are we rendering, obj =< what we are rendering) 
    res.render('pages/home', {
        title: 'My Futurama Homepage',
        name: "Crazpicc's Futurama App!"
    })
})

//? http://localhost:3000/characters
router.get('/characters', (req, res)=> {

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
router.get('/episodes', (req, res)=> {

// do stuff
const url = 'https://api.sampleapis.com/futurama/episodes'

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        res.render('pages/episodes', {
            title: 'Futurama Episodes',
            name: 'Good news Everyone! Here are some episodes!',
            episodes: data
        })
    })
        
})

module.exports = router