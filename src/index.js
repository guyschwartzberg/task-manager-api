const express = require('express')
require('./db/mongoose')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use('/users', require('./routers/user'))
app.use('/tasks', require('./routers/task'))

// Start the server
app.listen(port, () => {
    console.log(`server is up on port ${ port }`)
})