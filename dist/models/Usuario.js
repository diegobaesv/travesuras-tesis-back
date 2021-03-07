"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Matricula_1 = __importDefault(require("./Matricula"));
const Pago_1 = __importDefault(require("./Pago"));
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Usuario = sequelize.define('usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    correo: {
        type: DataTypes.STRING(250)
    },
    username: {
        type: DataTypes.STRING(20)
    },
    clave: {
        type: DataTypes.STRING(250)
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});
Usuario.hasMany(Matricula_1.default, { foreignKey: 'id_usuario', sourceKey: 'id_usuario' });
Matricula_1.default.belongsTo(Usuario, { foreignKey: 'id_usuario', sourceKey: 'id_usuario' });
Usuario.hasMany(Pago_1.default, { foreignKey: 'id_usuario', sourceKey: 'id_usuario' });
Pago_1.default.belongsTo(Usuario, { foreignKey: 'id_usuario', sourceKey: 'id_usuario' });
exports.default = Usuario;
