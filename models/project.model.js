const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
  tech_image: { type: String, required: true },
  tech_name: { type: String, required: true },
});

const ProjectSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    tech: [techSchema],
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
