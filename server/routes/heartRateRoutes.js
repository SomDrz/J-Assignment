const express = require("express");
const { recordHeartRate, getHeartRates } = require("../Controller/HeartCon");

const router = express.Router();
router.post("/:patientId", recordHeartRate);
router.get("/:patientId", getHeartRates);

module.exports = router;
