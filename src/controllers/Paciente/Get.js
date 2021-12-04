const Paciente = require("../../models/Schema.Paciente");
const GetPatient = async (req, res, next) => {
  try {
    await Paciente.find().then((data) => res.json(data));
  } catch (e) {
    return next(e);
  }
  res.send("Las informaciones de los pacientes");
};
module.exports = GetPatient;
