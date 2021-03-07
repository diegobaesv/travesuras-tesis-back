"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pago_controller_1 = require("../controllers/pago.controller");
const router = express_1.Router();
router.route('/')
    .post(pago_controller_1.createPago);
router.route('/alumno/:id_alumno')
    .get(pago_controller_1.getPagosByAlumno);
exports.default = router;
