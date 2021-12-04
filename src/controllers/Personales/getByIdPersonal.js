const Personal = require("../../models/Schema.Personal");

const GetByIdPersonal = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Personal.findById(id).then((data) => res.json(data));
  } catch (e) {
    return next(e);
  }
  res.senda(`La informacion del ${req.body.nombre}`);
};

module.exports = GetByIdPersonal;
