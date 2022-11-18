const express = require('express')
const router = express.Router()

const Project = require('../models/projectSchema')

router.route('/api/projects')
.get(async (req, res) => {
    const projects = await Project.find()
    res.send(projects)
})
.post(async (req, res) => {
    const newProject = new Project({
        title: req.body.title,
        content: req.body.content,
        site: req.body.site,
        gitHub: req.body.gitHub
    })
    const project = await newProject.save()
    res.send(`Success:\n${newProject}`)
})



module.exports = router