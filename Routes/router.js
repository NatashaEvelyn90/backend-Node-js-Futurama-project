//! Handles top level configureation FOR ROUTES 

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

//TODO Add inventory 
const endpoints = ['characters', 'cast', 'episodes', 'questions']

// router.use('/characters', require('./api/charactersRoutes'))
// router.use('/episodes', require('./api/episodesRoutes'))
// router.use('/cast', require('./api/castRoutes'))

//! This code is used instead of what was used above. This is the simple version
endpoints.forEach(endpoint => {
    router.use(`/${endpoint}`, require(`./api/${endpoint}Routes`))
})

module.exports = router