const Stack = require('../models/stack.model');

//Get Stack
const getStacks = async (req, res) => {
  try {
    const stacks = await Stack.find({});
    res.status(200).json(stacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get Stack by ID
const getStack = async (req, res) => {
  try {
    const { id } = req.params;
    const stack = await Stack.findById(id);
    res.status(200).json(stack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Stack
const createStack = async (req, res) => {
  try {
    const stack = await Stack.create(req.body);
    res.status(200).json(stack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getStacks, getStack, createStack };
