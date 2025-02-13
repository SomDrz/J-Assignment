const mongoose = require("mongoose");

const heartRateSchema = new mongoose.Schema({
  bpm: { type: Number, required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("HeartRate", heartRateSchema);
