const EstadoDelPaciente = require("../../models/Schema.Estado");

const GetByIdEstado = async (req, res, next) => {
  try {
    const { id } = req.params;
    await EstadoDelPaciente.findById(id).then((data) => res.json(data));
    res.send("La informacion del paciente");
  } catch (e) {
    return next(e);
  }
  res.send("Este es el Estado del Paciente");
};

module.exports = GetByIdEstado;
