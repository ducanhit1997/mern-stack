const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', (req, res) => { res.send('SERVER RUNNING') })

app.listen(port, () => {
  console.log("Server running on port", port)
})