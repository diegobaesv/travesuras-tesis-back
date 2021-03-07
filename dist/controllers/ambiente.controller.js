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
exports.getAmbientes = void 0;
const DistribucionAmbiente_1 = __importDefault(require("../models/DistribucionAmbiente"));
const Docente_1 = __importDefault(require("../models/Docente"));
const Aula_1 = __importDefault(require("../models/Aula"));
const Nivel_1 = __importDefault(require("../models/Nivel"));
function getAmbientes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ambientes = yield DistribucionAmbiente_1.default.findAll({
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
    });
}
exports.getAmbientes = getAmbientes;
