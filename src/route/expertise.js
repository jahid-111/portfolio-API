const express = require("express");

const { handleGetExpertise } = require("../controller/handleExpertise");

const router = express.Router();

router.get("", handleGetExpertise);

module.exports = router;
