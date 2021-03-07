"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagosByAlumno = exports.createPago = void 0;
const Pago_1 = __importDefault(require("../models/Pago"));
const Usuario_1 = __importDefault(require("../models/Usuario"));
async function createPago(req, res) {
    try {
        const { concepto, metodo, monto, fecha_pago, id_alumno, id_usuario } = req.body;
        let newPago = await Pago_1.default.create({
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
}
exports.createPago = createPago;
async function getPagosByAlumno(req, res) {
    try {
        const { id_alumno } = req.params;
        const pagos = await Pago_1.default.findAll({
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
}
exports.getPagosByAlumno = getPagosByAlumno;
