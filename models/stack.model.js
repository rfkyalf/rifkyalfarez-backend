const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
  tech_image: { type: String, required: true },
  tech_name: { type: String, required: true },
});

const StackSchema = new mongoose.Schema(
  {
    bg_image: { type: String, required: true },
    name: { type: String, required: true },
    tech: { type: [technologySchema], required: true },
  },
  { timestamps: true }
);

const Stack = mongoose.model('Stack', StackSchema);

module.exports = Stack;
