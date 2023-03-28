const express = require('express')
const cors = require('cors')

require('dotenv').config()

const dbConnect = require('./config/dbConnect')
const initRoutes = require('./routers')
const { verifyToken } = require('./middleware')

const app = express()
app.use(cors());

const port = process.env.PORT
app.use(express.json())

app.use(verifyToken);
app.use(express.urlencoded({ extended: true }))
dbConnect()
initRoutes(app)

app.use('/', (req, res) => { res.send('SERVER RUNNING') })

app.listen(port, () => {
  console.log("Server running on port", port)
})