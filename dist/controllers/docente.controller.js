"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocentes = void 0;
const Docente_1 = __importDefault(require("../models/Docente"));
async function getDocentes(req, res) {
    try {
        const docentes = await Docente_1.default.findAll();
        res.json({
            data: docentes
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getDocentes = getDocentes;
