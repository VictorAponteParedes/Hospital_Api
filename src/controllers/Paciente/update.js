const Paciente = require("../../models/Schema.Paciente");
const UpdatePatiend = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      apellido,
      edad,
      nacionalidad,
      direccion,
      pisoDelHospital,
      tipo_de_enfermermedad,
      fecha_llegada,
    } = req.body;
    await Paciente.updateOne(
      { _id: id },
      {
        $set: {
          nombre,
          apellido,
          edad,
          nacionalidad,
          direccion,
          pisoDelHospital,
          tipo_de_enfermermedad,
          fecha_llegada,
        },
      }
    ).then((data) => res.json(data));
  } catch (e) {
    return next(e);
  }

  res.send("La lista del paciente fue actualizada");
};

module.exports = UpdatePatiend;
