const express = require("express");
const route = express.Router();

//!Importaciones de Archivos de los Personales
const CreatePersonal = require("../controllers/Personales/postPersonal");
const GetPersonal = require("../controllers/Personales/getPersonal");
const GetByIdPersonal = require("../controllers/Personales/getByIdPersonal");
const UpdatePersonal = require("../controllers/Personales/updatePersonal");
const DeletePersonal = require("../controllers/Personales/deletePersonal");

route.post("/add-Personal", CreatePersonal);

route.get("/get-Personal", GetPersonal);

route.get("/get-Personal/:id", GetByIdPersonal);

route.put("/put-Personal/:id", UpdatePersonal);

route.delete("/delete-Personal/:id", DeletePersonal);

module.exports = route;
