const About = require('../models/about.model');

//Get About
const getAbouts = async (req, res) => {
  try {
    const abouts = await About.find({});
    res.status(200).json(abouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get About by ID
const getAbout = async (req, res) => {
  try {
    const { id } = req.params;
    const about = await About.findById(id);
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create About
const createAbout = async (req, res) => {
  try {
    const about = await About.create(req.body);
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAbouts, getAbout, createAbout };
