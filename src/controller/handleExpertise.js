const Expertise = require("../models/expertiseSchema");

async function handleGetExpertise(req, res) {
  const expertise = await Expertise.find({});
  res.json(expertise);
}

module.exports = { handleGetExpertise };
