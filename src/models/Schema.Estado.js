const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstadoDelPaciente = new Schema({
  nombre: { type: String, require: true },
  edad: { type: Number, require: true },
  estado: { type: String, require: true },
});
module.exports = mongoose.model("Estado", EstadoDelPaciente);
