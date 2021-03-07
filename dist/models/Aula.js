"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DistribucionAmbiente_1 = __importDefault(require("./DistribucionAmbiente"));
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Aula = sequelize.define('aulas', {
    id_aula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(250)
    },
    capacidad: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});
Aula.hasMany(DistribucionAmbiente_1.default, { foreignKey: 'id_aula', sourceKey: 'id_aula' });
DistribucionAmbiente_1.default.belongsTo(Aula, { foreignKey: 'id_aula', sourceKey: 'id_aula' });
exports.default = Aula;
