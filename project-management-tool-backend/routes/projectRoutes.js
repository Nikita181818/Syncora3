const express = require('express');
const projectController = require('../controllers/projectControllers');
const Project = require('../models/projectModel');

const router = express.Router();

// POST request to add a new project
router.post('/addProject', projectController.addProject);

// GET request to fetch all projects
router.get('/getAllProjects', projectController.getAllProjects);

// DELETE request to delete a project by its ID
router.delete('/deleteProject/:id', projectController.deleteProject);

// GET request to fetch assigned managers
router.get('/assigned-managers', projectController.getAssignedManagers);

// GET request to fetch total projects count
router.get('/count', projectController.getTotalProjects);

module.exports = router;
