const express = require("express");
const routes = express.Router();

const CreateEstado = require("../controllers/Estado/CreateEstadoDelPaciente");
const GetByIdEstado = require("../controllers/Estado/GetByIdEstado");

routes.post("/add-estado", CreateEstado);

routes.get("/get-estado/:id", GetByIdEstado);

module.exports = routes;
