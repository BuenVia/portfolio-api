const express = require('express')
const { default: mongoose } = require('mongoose')

const app = express()
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB)


const blogRouter = require('./routes/blogRouter')

let port = 3000

app.get('/', blogRouter)
app.get('/api/blog', blogRouter)

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
})