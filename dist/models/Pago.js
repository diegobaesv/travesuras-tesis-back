"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Pago = sequelize.define('pagos', {
    id_pago: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER
    },
    id_alumno: {
        type: DataTypes.INTEGER
    },
    monto: {
        type: DataTypes.FLOAT
    },
    metodo: {
        type: DataTypes.STRING
    },
    concepto: {
        type: DataTypes.STRING
    },
    fecha_pago: {
        type: DataTypes.DATEONLY
    }
}, {
    timestamps: false
});
exports.default = Pago;
