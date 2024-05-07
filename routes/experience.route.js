const express = require('express');
const {
  getExperiences,
  getExperience,
  createExperience,
} = require('../controllers/experience.controller');
const router = express.Router();

// Get About
router.get('/', getExperiences);

// Get About by ID
router.get('/:id', getExperience);

// Create About
router.post('/', createExperience);

module.exports = router;
