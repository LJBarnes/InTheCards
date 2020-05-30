const express = require('express')
const app = express()
const port = 3000
const readingsRouter = require('./routes/readings')

app.set ('view engine', 'ejs')

// this allows every route created in readingsRouter to be found at /readings/_____
app.use('/readings', readingsRouter)

app.get('/', (req, res) =>{
    const readings = [{
        title: 'test1',
        createdAt: Date.now(),
        description: 'test description'
    }]
    // make readings available in ejs with object containing key/propteries--
    res.render('index', {readings: readings})
})




app.listen(port, () => console.log(`App listening on port ${port}`)) 