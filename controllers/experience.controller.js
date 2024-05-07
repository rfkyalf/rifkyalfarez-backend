const Experience = require('../models/experience.model');

//Get Experience
const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find({});
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get Experience by ID
const getExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findById(id);
    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Experience
const createExperience = async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getExperiences, getExperience, createExperience };
