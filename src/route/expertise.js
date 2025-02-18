const express = require("express");

const {
  handleGetExpertise,
  handleAddExpertise,
  handleEditExpertise,
  handleDeleteExpertise,
} = require("../controller/handleExpertise");

const router = express.Router();

router.get("", handleGetExpertise);
router.post("", handleAddExpertise);
router.patch("/:id", handleEditExpertise);
router.delete("/:id", handleDeleteExpertise);

module.exports = router;
