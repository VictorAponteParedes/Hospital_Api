const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Paciente = new Schema({
  nombre: { type: String, require: true },

  apellido: { type: String, require: true },

  edad: { type: Number, require: true },

  nacionalidad: { type: String },

  direccion: { type: String, require: true },

  tipo_de_enfermermedad: { type: String, require: true },

  pisoDelHospital: { type: String, require: true },

  fecha_de_llegada: { type: Date },
});

module.exports = mongoose.model("Paciente", Paciente);
