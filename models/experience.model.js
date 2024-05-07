const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

const Experience = mongoose.model('Experience', ExperienceSchema);

module.exports = Experience;
