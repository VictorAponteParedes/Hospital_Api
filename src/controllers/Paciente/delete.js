const Paciente = require("../../models/Schema.Paciente");
const DeletePatient = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Paciente.findByIdAndRemove(id);
  } catch (e) {
    return next(e);
  }
  res.send("La lista del paciente fue eliminda");
};
module.exports = DeletePatient;
