const Personal = require("../../models/Schema.Personal");

const CreatePersonal = async (req, res, next) => {
  try {
    const personal = Personal(req.body);
    await personal.save();
  } catch (e) {
    return next(e);
  }
  res.send("El personal fue agregado a la lista");
};

module.exports = CreatePersonal;
