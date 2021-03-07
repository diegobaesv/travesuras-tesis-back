"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumnos_route_1 = __importDefault(require("./alumnos.route"));
const ambientes_route_1 = __importDefault(require("./ambientes.route"));
const matricula_route_1 = __importDefault(require("./matricula.route"));
const pagos_route_1 = __importDefault(require("./pagos.route"));
const docentes_route_1 = __importDefault(require("./docentes.route"));
const usuarios_route_1 = __importDefault(require("./usuarios.route"));
const usuario_controller_1 = require("../controllers/usuario.controller");
// Init router and path
const router = express_1.Router();
// Add sub-routes
router.use('/alumnos', alumnos_route_1.default);
router.use('/ambientes', ambientes_route_1.default);
router.use('/matricula', matricula_route_1.default);
router.use('/pagos', pagos_route_1.default);
router.use('/docentes', docentes_route_1.default);
router.use('/usuarios', usuarios_route_1.default);
router.route('/login')
    .post(usuario_controller_1.login);
// Export the base-router
exports.default = router;
