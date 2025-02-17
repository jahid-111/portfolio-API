const Expertise = require("../models/expertiseSchema");

async function handleGetExpertise(req, res, next) {
  try {
    const expertise = await Expertise.find({});
    if (!expertise || expertise.length === 0) {
      return res.status(404).json({ message: "No expertise found" });
    }

    res.json(expertise);
  } catch (error) {
    next(error);
  }
}

module.exports = { handleGetExpertise };
