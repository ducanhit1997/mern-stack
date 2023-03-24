const express = require('express')
require('dotenv').config()

const dbConnect = require('./config/dbConnect')
const initRoutes = require('./routers')

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dbConnect()
initRoutes(app)

app.use('/', (req, res) => { res.send('SERVER RUNNING') })

app.listen(port, () => {
  console.log("Server running on port", port)
})