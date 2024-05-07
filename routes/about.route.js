const express = require('express');
const {
  getAbouts,
  getAbout,
  createAbout,
} = require('../controllers/about.controller');
const router = express.Router();

// Get About
router.get('/', getAbouts);

// Get About by ID
router.get('/:id', getAbout);

// Create About
router.post('/', createAbout);

module.exports = router;
