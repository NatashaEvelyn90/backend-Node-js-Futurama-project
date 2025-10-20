const router = require('express').Router()

const fetch = (...args)=> import('node-fetch').then(({ default: fetch}) => fetch(...args))


module.exports = router