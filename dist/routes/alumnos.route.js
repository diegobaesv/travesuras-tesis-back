"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumno_controller_1 = require("src/controllers/alumno.controller");
const router = express_1.Router();
router.route('/')
    .get(alumno_controller_1.getAlumnos);
router.route('/buscar/nombres/:busqueda')
    .get(alumno_controller_1.buscarPorNombre);
router.route('/ambiente/:id_distribucion_ambiente')
    .get(alumno_controller_1.getAlumnosByAmbienteId);
exports.default = router;
