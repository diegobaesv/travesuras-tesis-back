"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const DistribucionAmbiente = sequelize.define('distribucion_ambientes', {
    id_distribucion_ambiente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_docente: {
        type: DataTypes.INTEGER
    },
    id_aula: {
        type: DataTypes.INTEGER
    },
    id_nivel: {
        type: DataTypes.INTEGER
    },
    anio: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});
/*
DistribucionAmbiente.hasMany(Matricula,{foreignKey:'id_distribucion_ambiente', sourceKey: 'id_distribucion_ambiente'} );
Matricula.belongsTo(DistribucionAmbiente, {foreignKey: 'id_distribucion_ambiente',sourceKey: 'id_distribucion_ambiente'});*/
exports.default = DistribucionAmbiente;
