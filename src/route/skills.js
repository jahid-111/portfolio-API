const express = require("express");
const { handleGetTechnologies } = require("../controller/handleTechnologies");

const router = express.Router();

router.get("", handleGetTechnologies);

module.exports = router;
