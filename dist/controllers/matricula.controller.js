"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstadoMatriculaByAlumno = exports.createMatricula = void 0;
const Matricula_1 = __importDefault(require("../models/Matricula"));
const DistribucionAmbiente_1 = __importDefault(require("../models/DistribucionAmbiente"));
const Alumno_1 = __importDefault(require("@entities/Alumno"));
function createMatricula(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id_alumno, id_distribucion_ambiente, fecha_matricula, id_usuario } = req.body;
            let newMatricula = yield Matricula_1.default.create({
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
    });
}
exports.createMatricula = createMatricula;
function getEstadoMatriculaByAlumno(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id_alumno } = req.params;
            const matriculas = yield DistribucionAmbiente_1.default.findAll({
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
    });
}
exports.getEstadoMatriculaByAlumno = getEstadoMatriculaByAlumno;
