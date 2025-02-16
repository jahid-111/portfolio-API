const mongoose = require("mongoose");

const ExpertiseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    description: "The name of the service",
  },
  description: {
    type: String,
    required: true,
    description: "A brief description of the service",
  },
});

const Expertise = mongoose.model("Expertise", ExpertiseSchema);

module.exports = Expertise;
