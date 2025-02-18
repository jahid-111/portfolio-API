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

async function handleAddExpertise(req, res, next) {
  try {
    const expertise = await Expertise.create(req.body);
    await expertise.save();
    res.json(expertise);
  } catch (error) {
    next(error);
  }
}

async function handleEditExpertise(req, res, next) {
  const { name, description } = req.body;

  try {
    const editExpertise = await Expertise.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );

    if (!editExpertise) {
      return res.status(404).json({ error: "Expertise not found." });
    }

    res.status(200).json(editExpertise);
  } catch (error) {
    next(error);
  }
}

async function handleDeleteExpertise(req, res, next) {
  try {
    const deleteExpertise = await Expertise.findByIdAndDelete(req.params.id);
    if (!deleteExpertise) {
      return res.status(404).json({ error: "Expertise not found." });
    }
    res.status(204).end(); // 204 No Content
  } catch (error) {
    next(error);
  }
}
module.exports = {
  handleGetExpertise,
  handleAddExpertise,
  handleEditExpertise,
  handleDeleteExpertise,
};
