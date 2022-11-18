const express = require('express')
const { default: mongoose } = require('mongoose')

const app = express()
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB)


const blogRouter = require('./routes/blogRouter')

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get('/', blogRouter)
app.get('/api/blog', blogRouter)

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
})