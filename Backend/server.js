//import the express.js
const express = require('express')

//import environmental variable lib
const dotenv = require('dotenv')

//configuration dotenv 
dotenv.config();

const port = process.env.PORT || 5000

const app = express()
app.listen(port, () => {
    console.log(`Example app is listening at : ${port}`)
})

/*app.get('/api/eventapp',(req, res) => {
    res.json("Hello Tharun")
})

app.post('/api/eventapp', (req, res) => {
    res.status(200).json("Posted an event") 
    })

app.put('/api/eventapp/:id', (req, res) => { 
    res.status(200).json({message:`Updated the event ${req.params.id}`})
    })

app.delete('/api/eventapp/:id', (req, res) => {
    res.status(200).json({message:`Deleted the event ${req.params.id}`})
    })*/

// import the routes
const eventroutes = require("./routes/eventRoutes")
// handle the routes
app.use('/api/events', eventroutes)

// Helps to parse incoming JSON
app.use(express.json())

