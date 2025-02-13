const express = require("express");
const { addPatient, getPatient } = require("../Controller/PatientCon");

const router = express.Router();
router.post("/", addPatient);
router.get("/:id", getPatient);

module.exports = router;
