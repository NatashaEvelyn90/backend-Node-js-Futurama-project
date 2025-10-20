const express= require('express')
const router = express.Router()

const fetch = (...args)=> import('node-fetch').then(({ default: fetch}) => fetch(...args))

// localhost:3000/episodes
//? http://localhost:3000/episodes
router.get('/episodes', (req, res)=> {

// do stuff
const url = 'https://api.sampleapis.com/futurama/episodes'

fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        res.render('pages/episodes', {
            title: 'Futurama Episodes',
            name: 'Good news Everyone! Here are some episodes!',
            episodes: data
        })
    })
        
})

router.get('/:id', (req, res)=> {

    const id= req.params.id

    const url = `https://api.sampleapis.com/futurama/episodes/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/singleEpisodes', {
                number: `${data.number}`,
                title: `${data.title}`,
                writers: `${data.writers}`,
                originalAirDate: `${data.originalAirDate}`,
                episodeDescrpition: `${data.desc}`,
                name: `${data.name}`,
                data               
            })
        })
})

module.exports = router