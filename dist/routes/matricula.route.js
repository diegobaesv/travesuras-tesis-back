"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matricula_controller_1 = require("../controllers/matricula.controller");
const router = express_1.Router();
router.route('/')
    .post(matricula_controller_1.createMatricula);
router.route('/alumno/:id_alumno/estado')
    .get(matricula_controller_1.getEstadoMatriculaByAlumno);
exports.default = router;
