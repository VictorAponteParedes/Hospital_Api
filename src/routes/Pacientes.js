const express = require("express");
const routes = express.Router();
//! Importaciones de los Archivos externos
const CreatePatient = require("../controllers/Paciente/create");
const GetPatient = require("../controllers/Paciente/Get");
const GetPatienbyId = require("../controllers/Paciente/getId");
const UpdatePatiend = require("../controllers/Paciente/update");
const DeletePatient = require("../controllers/Paciente/delete");

//! Crear lista de Pacientes
routes.post("/add-Patient", CreatePatient);

//! Obtener las informaciones de los Pacientes
routes.get("/get-Patient", GetPatient);

//! Obtener la informacion de un solo paciente
routes.get("/get-Patient/:id", GetPatienbyId);

//! Actulizar la lista del paciente
routes.put("/put-Patient/:id", UpdatePatiend);

//! Borrar la lista del paciente
routes.delete("/delete-Patient/:id", DeletePatient);

module.exports = routes;
