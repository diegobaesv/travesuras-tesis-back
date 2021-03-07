import DistribucionAmbiente from "./DistribucionAmbiente";

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database')

const Nivel = sequelize.define('niveles',{
    id_nivel :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    nombre:{
        type: DataTypes.STRING(250)
    }
},{
    timestamps: false
}
);

Nivel.hasMany(DistribucionAmbiente, {foreignKey: 'id_nivel',sourceKey: 'id_nivel'});
DistribucionAmbiente.belongsTo(Nivel, {as:'nivel',foreignKey:'id_nivel', sourceKey: 'id_nivel'});

export default Nivel;