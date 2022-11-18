const express = require('express')
const router = express.Router()

const Blog = require('../models/blogSchema')

// Blog API

router.route('/api/blog')
.get(async (req, res) => {
    const blog = await Blog.find().sort({ createdAt: -1 })
    res.send(blog)
})

router.get('/api/blog/latest', async (req, res) => {
    const blog = await Blog.findOne({}, {}, { sort: {createdAt: -1 }})
    res.send(blog)
})



module.exports = router