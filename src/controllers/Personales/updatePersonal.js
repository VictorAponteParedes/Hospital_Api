const Personal = require("../../models/Schema.Personal");

const UpdatePersonal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      apellido,
      edad,
      direccion,
      especializacion,
      fecha_de_llegada,
    } = req.body;
    await Personal.updateOne(
      { _id: id },
      {
        $set: {
          nombre,
          apellido,
          edad,
          direccion,
          especializacion,
          fecha_de_llegada,
        },
      }
    );
  } catch (e) {
    return next(e);
  }
  res.send("La informacion del persoal fue actualizada");
};

module.exports = UpdatePersonal;
