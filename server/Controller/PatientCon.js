const Patient = require("../models/Patient");


exports.addPatient = async (req, res) => {
  const { name, age, userId } = req.body;
  try {
    const patient = await Patient.create({ name, age, userId });
    res.status(201).json({ message: "patient added", patient });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
