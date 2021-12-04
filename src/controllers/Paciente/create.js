const Paciente = require("../../models/Schema.Paciente");

const CreatePatient = async (req, res, next) => {
  try {
    const paciente = Paciente(req.body);
    await paciente.save();
  } catch (e) {
    return next(e);
  }
  res.send("El paciente fue agregado a la lista");
};

module.exports = CreatePatient;
