const HeartRate = require("../models/HeartRate");


exports.recordHeartRate = async (req, res) => {
  const { bpm } = req.body;
  try {
    const heartRate = await HeartRate.create({ bpm, patientId: req.params.patientId });
    res.status(201).json({ message: "Heart rate recorded", heartRate });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getHeartRates = async (req, res) => {
  try {
    const heartRates = await HeartRate.find({ patientId: req.params.patientId });
    res.json(heartRates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
