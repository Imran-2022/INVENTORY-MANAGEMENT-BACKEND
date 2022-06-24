const express = require('express')
const app = express()
const cors = require('cors');
const userRouter = require('./routes/routes')

app.use(express.json())
app.use(cors())
app.use('/api', userRouter)

// home route

app.get('/', async (req, res) => {
    await res.sendFile(__dirname + "/view/homeRoute.html");
})

// route not matched

app.use('*', (req, res, next) => {
    res.status(404).json({ message: "route not found/bad request" })
})


module.exports = app;