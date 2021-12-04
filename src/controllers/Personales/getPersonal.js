const Personal = require("../../models/Schema.Personal");

const GetPersonal = async (req, res, next) => {
  try {
    await Personal.find().then((data) => res.json(data));
  } catch (e) {
    return next(e);
  }
  res.send("Las Informaciones de los Personales");
};

module.exports = GetPersonal;
