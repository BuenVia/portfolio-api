const express = require('express')
const router = express.Router()

const Blog = require('../models/blogSchema')

router.get('/', (req, res) => {
    res.send('Please use the correct endpoint')
})

router.get('/api/blog', async (req, res) => {
    const blog = await Blog.find()
    res.send(blog)
})

router.get('/api/blog/latest', async (req, res) => {
    const blog = await Blog.findOne({}, {}, { sort: {createdAt: -1 }})
    res.send(blog)
})

module.exports = router