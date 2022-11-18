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

router.route('/api/projects/:id')
.get(async (req, res) => {
    const project = await Project.findOne({ _id: req.params.id })
    res.send(project)
})
.put(async (req, res) => {
    const updateProject = await Project.updateOne({ _id: req.params.id }, { $set: req.body })
    res.send(`Successfully updated project`)
})
.delete(async (req, res) => {
    const deleteProject = await Project.deleteOne({ _id: req.params.id })
    res.send(`Successfully deleted project`)
})



module.exports = router