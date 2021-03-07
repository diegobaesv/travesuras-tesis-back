import DistribucionAmbiente from "./DistribucionAmbiente";

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database')

const Aula = sequelize.define('aulas',{
    id_aula :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    nombre:{
        type: DataTypes.STRING(250)
    },
    capacidad:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
}
);

Aula.hasMany(DistribucionAmbiente, {foreignKey: 'id_aula',sourceKey: 'id_aula'});
DistribucionAmbiente.belongsTo(Aula, {foreignKey:'id_aula', sourceKey: 'id_aula'});

export default Aula;