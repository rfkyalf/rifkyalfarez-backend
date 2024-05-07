const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    href: { type: String, required: true },
  },
  { timestamps: true }
);

const About = mongoose.model('About', AboutSchema);

module.exports = About;
