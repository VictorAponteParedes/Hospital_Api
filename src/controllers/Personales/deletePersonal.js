const Personal = require("../../models/Schema.Personal");

const DeletePersonal = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Personal.findByIdAndRemove(id);
  } catch (e) {
    return next(e);
  }
  res.send("La informacion del pernal fue eliminda de la lista");
};

module.exports = DeletePersonal;
