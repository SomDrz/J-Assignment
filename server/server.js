require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");
const patientRoutes = require("./routes/patientRoutes");
const heartRateRoutes = require("./routes/heartRateRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/users", userRoutes);
app.use("/patients", patientRoutes);
app.use("/heartrates", heartRateRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server --> ${PORT}`));
