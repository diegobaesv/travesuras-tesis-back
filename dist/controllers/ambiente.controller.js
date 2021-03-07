"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAmbientes = void 0;
const DistribucionAmbiente_1 = __importDefault(require("../models/DistribucionAmbiente"));
const Docente_1 = __importDefault(require("../models/Docente"));
const Aula_1 = __importDefault(require("../models/Aula"));
const Nivel_1 = __importDefault(require("../models/Nivel"));
async function getAmbientes(req, res) {
    try {
        const ambientes = await DistribucionAmbiente_1.default.findAll({
            attributes: { exclude: ['id_docente', 'id_aula', 'id_nivel'] },
            include: [
                {
                    model: Docente_1.default,
                    as: 'docente'
                },
                {
                    model: Aula_1.default,
                    as: 'aula'
                },
                {
                    model: Nivel_1.default,
                    as: 'nivel'
                }
            ]
        });
        res.json({
            data: ambientes
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getAmbientes = getAmbientes;
