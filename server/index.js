const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
app.use(cors())
app.use(express.json())

require('dotenv').config({ path: './config.env' })
const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
