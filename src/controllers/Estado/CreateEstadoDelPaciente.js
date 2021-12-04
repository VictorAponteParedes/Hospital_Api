const EstadoDelPaciente = require("../../models/Schema.Estado");

const CreateEstado = async (req, res, next) => {
  try {
    const estado = EstadoDelPaciente(req.body);
    await estado.save();
  } catch (e) {
    return next(e);
  }
  res.send("Estado del Paciente agregado");
};
module.exports = CreateEstado;
