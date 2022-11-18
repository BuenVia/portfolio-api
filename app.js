const express = require('express')
const { default: mongoose } = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB)


const blogRouter = require('./routes/blogRouter')
const projectRouter = require('./routes/projectRouter')

let port = process.env.PORT;
if (port == null || port == "") {
  port = 9000;
}

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(bodyParser.urlencoded({ extended: true }))
  
app.get('/', (req, res) => {
  res.send('Please use the correct endpoint')
})

// Blog
app.get('/api/blog', blogRouter)
app.get('/api/blog/latest', blogRouter)

// Projects
app.get('/api/projects', projectRouter)
app.post('/api/projects', projectRouter)

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
})