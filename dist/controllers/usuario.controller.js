"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.getUsuarios = void 0;
const Usuario_1 = __importDefault(require("../models/Usuario"));
async function getUsuarios(req, res) {
    try {
        const usuarios = await Usuario_1.default.findAll();
        res.json({
            data: usuarios
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getUsuarios = getUsuarios;
async function login(req, res) {
    try {
        const { username, clave } = req.body;
        const usuario = await Usuario_1.default.findOne({ where: { username } });
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
}
exports.login = login;
