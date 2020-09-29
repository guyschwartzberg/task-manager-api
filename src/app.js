const express = require('express')
require('./db/mongoose')

const app = express()

app.use(express.json())
app.use('/users', require('./routers/user'))
app.use('/tasks', require('./routers/task'))

module.exports = app