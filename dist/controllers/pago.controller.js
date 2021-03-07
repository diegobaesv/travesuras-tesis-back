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
exports.getPagosByAlumno = exports.createPago = void 0;
const Pago_1 = __importDefault(require("../models/Pago"));
const Usuario_1 = __importDefault(require("../models/Usuario"));
function createPago(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { concepto, metodo, monto, fecha_pago, id_alumno, id_usuario } = req.body;
            let newPago = yield Pago_1.default.create({
                concepto, metodo, monto, fecha_pago, id_alumno, id_usuario
            });
            res.json({
                message: 'Creado satisfactorio',
                newPago
            });
        }
        catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Algo ha salido mal'
            });
        }
    });
}
exports.createPago = createPago;
function getPagosByAlumno(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id_alumno } = req.params;
            const pagos = yield Pago_1.default.findAll({
                include: [
                    {
                        model: Usuario_1.default,
                        as: 'usuario'
                    }
                ],
                where: {
                    id_alumno
                },
                order: [
                    ['id_pago', 'DESC']
                ]
            });
            res.json({
                data: pagos
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getPagosByAlumno = getPagosByAlumno;
