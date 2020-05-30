// all of routes related to readings

const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>
res.send('in readings route'))

module.exports = router