"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstadoMatriculaByAlumno = exports.createMatricula = void 0;
const Matricula_1 = __importDefault(require("../models/Matricula"));
const DistribucionAmbiente_1 = __importDefault(require("../models/DistribucionAmbiente"));
const Alumno_1 = __importDefault(require("../models/Alumno"));
async function createMatricula(req, res) {
    try {
        const { id_alumno, id_distribucion_ambiente, fecha_matricula, id_usuario } = req.body;
        let newMatricula = await Matricula_1.default.create({
            id_alumno, id_distribucion_ambiente, fecha_matricula, id_usuario
        });
        res.json({
            message: 'Creado satisfactorio',
            newMatricula
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }
}
exports.createMatricula = createMatricula;
async function getEstadoMatriculaByAlumno(req, res) {
    try {
        const { id_alumno } = req.params;
        const matriculas = await DistribucionAmbiente_1.default.findAll({
            include: [
                {
                    model: Alumno_1.default,
                    where: {
                        id_alumno
                    }
                }
            ]
        });
        res.json({
            estado: Object.keys(matriculas).length >= 1
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getEstadoMatriculaByAlumno = getEstadoMatriculaByAlumno;
