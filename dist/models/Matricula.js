"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Alumno_1 = __importDefault(require("./Alumno"));
const DistribucionAmbiente_1 = __importDefault(require("./DistribucionAmbiente"));
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Matricula = sequelize.define('matriculas', {
    id_matricula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_distribucion_ambiente: {
        type: DataTypes.INTEGER
    },
    id_alumno: {
        type: DataTypes.INTEGER
    },
    id_usuario: {
        type: DataTypes.INTEGER
    },
    fecha_matricula: {
        type: DataTypes.DATEONLY
    }
}, {
    timestamps: false
});
Alumno_1.default.belongsToMany(DistribucionAmbiente_1.default, { through: Matricula, foreignKey: 'id_alumno', otherKey: 'id_distribucion_ambiente' });
DistribucionAmbiente_1.default.belongsToMany(Alumno_1.default, { through: Matricula, foreignKey: 'id_distribucion_ambiente', otherKey: 'id_alumno' });
exports.default = Matricula;
