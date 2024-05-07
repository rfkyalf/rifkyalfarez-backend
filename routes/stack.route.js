const express = require('express');
const {
  getStacks,
  getStack,
  createStack,
} = require('../controllers/stack.controller');
const router = express.Router();

// Get About
router.get('/', getStacks);

// Get About by ID
router.get('/:id', getStack);

// Create About
router.post('/', createStack);

module.exports = router;
