"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DistribucionAmbiente_1 = __importDefault(require("./DistribucionAmbiente"));
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Nivel = sequelize.define('niveles', {
    id_nivel: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(250)
    }
}, {
    timestamps: false
});
Nivel.hasMany(DistribucionAmbiente_1.default, { foreignKey: 'id_nivel', sourceKey: 'id_nivel' });
DistribucionAmbiente_1.default.belongsTo(Nivel, { as: 'nivel', foreignKey: 'id_nivel', sourceKey: 'id_nivel' });
exports.default = Nivel;
