"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPorNombre = exports.getAlumnos = exports.getAlumnosByAmbienteId = void 0;
const Alumno_1 = __importDefault(require("../models/Alumno"));
const database_1 = require("../config/database");
const Apoderado_1 = __importDefault(require("../models/Apoderado"));
const DistribucionAmbiente_1 = __importDefault(require("../models/DistribucionAmbiente"));
const Nivel_1 = __importDefault(require("../models/Nivel"));
const Aula_1 = __importDefault(require("../models/Aula"));
const { Op } = require("sequelize");
async function getAlumnosByAmbienteId(req, res) {
    try {
        const { id_distribucion_ambiente } = req.params;
        const alumnos = await Alumno_1.default.findAll({
            include: {
                model: DistribucionAmbiente_1.default,
                where: {
                    id_distribucion_ambiente
                },
                include: [
                    {
                        model: Nivel_1.default,
                        as: 'nivel'
                    },
                    {
                        model: Aula_1.default,
                        as: 'aula'
                    }
                ]
            }
        });
        res.json({
            data: alumnos
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getAlumnosByAmbienteId = getAlumnosByAmbienteId;
async function getAlumnos(req, res) {
    try {
        const alumnos = await Alumno_1.default.findAll({
            include: {
                model: DistribucionAmbiente_1.default,
                include: [
                    {
                        model: Nivel_1.default,
                        as: 'nivel'
                    },
                    {
                        model: Aula_1.default,
                        as: 'aula'
                    }
                ]
            }
        });
        res.json({
            data: alumnos
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getAlumnos = getAlumnos;
async function buscarPorNombre(req, res) {
    try {
        const { busqueda } = req.params;
        const alumnos = await Alumno_1.default.findAll({
            attributes: {
                include: [[
                        database_1.sequelize.fn("concat", database_1.sequelize.col("alumnos.nombres"), ' ', database_1.sequelize.col("alumnos.apellido_paterno"), ' ', database_1.sequelize.col("alumnos.apellido_materno")), 'nombre_completo'
                    ]]
            },
            include: [
                {
                    model: Apoderado_1.default,
                    as: 'apoderado'
                }
            ],
            where: database_1.sequelize.where(database_1.sequelize.fn("concat", database_1.sequelize.col("alumnos.nombres"), ' ', database_1.sequelize.col("alumnos.apellido_paterno"), ' ', database_1.sequelize.col("alumnos.apellido_materno")), { [Op.like]: `%${busqueda.toUpperCase()}%` })
        });
        res.json({
            data: alumnos
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.buscarPorNombre = buscarPorNombre;
