const Paciente = require("../../models/Schema.Paciente");
const GetPatienbyId = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Paciente.findById(id).then((data) => res.json(data));
    res.send("La informacion del paciente");
  } catch (e) {
    return next(e);
  }
};
module.exports = GetPatienbyId;
