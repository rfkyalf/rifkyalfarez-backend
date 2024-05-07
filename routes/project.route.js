const express = require('express');
const {
  getProjects,
  getProject,
  createProject,
} = require('../controllers/project.controller');

const router = express.Router();

// Get About
router.get('/', getProjects);

// Get About by ID
router.get('/:id', getProject);

// Create About
router.post('/', createProject);

module.exports = router;
