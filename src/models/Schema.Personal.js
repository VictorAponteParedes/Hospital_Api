const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Personal = new Schema({
  nombre: { type: String, require: true },

  apellido: { type: String, require: true },

  edad: { type: Number, require: true },

  direccion: { type: String, require: true },

  especializacion: { type: String, require: true },

  fecha_de_llegada: { type: Date },
});

module.exports = mongoose.model("personal", Personal);
