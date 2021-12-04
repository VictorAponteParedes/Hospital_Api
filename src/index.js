//! Importacion de los modulos
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const app = express();
//! Importacines de Archivos Externos
require("./databases/MongoDb");
const RoutePaciente = require("./routes/Pacientes");
const RoutePersonal = require("./routes/Personal");
const servicesRoute = require("./routes/servicesRoute");
const EstadoPaciente = require("./routes/Estado");
//! Config
app.set("port", process.env.PORT || 4000);

//!Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//! Routes
app.use(RoutePaciente, RoutePersonal, servicesRoute, EstadoPaciente);
//! Escuchador del Servidor
app.listen(app.get("port"), () => {
  console.log("Server on port:".blue.bold, app.get("port"));
});
