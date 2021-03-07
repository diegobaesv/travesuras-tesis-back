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
exports.login = exports.getUsuarios = void 0;
const Usuario_1 = __importDefault(require("../models/Usuario"));
function getUsuarios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuarios = yield Usuario_1.default.findAll();
            res.json({
                data: usuarios
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getUsuarios = getUsuarios;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, clave } = req.body;
            const usuario = yield Usuario_1.default.findOne({ where: { username } });
            if (usuario === null)
                throw { message: `Usuario no registrado` };
            const result = usuario.clave == clave;
            if (!result) {
                throw { message: "email y/o password son inválidas" };
            }
            res.json(usuario);
        }
        catch (e) {
            res.status(500).send(e);
        }
    });
}
exports.login = login;
