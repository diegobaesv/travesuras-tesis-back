import Alumno from "./Alumno";
import DistribucionAmbiente from "./DistribucionAmbiente";

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database')

const Matricula = sequelize.define('matriculas',{
    id_matricula :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    id_distribucion_ambiente:{
        type: DataTypes.INTEGER
    },
    id_alumno:{
        type: DataTypes.INTEGER
    },
    id_usuario: {
        type: DataTypes.INTEGER
    },
    fecha_matricula:{
        type: DataTypes.DATEONLY
    }    
},{
    timestamps: false
}
);


Alumno.belongsToMany(DistribucionAmbiente, { through: Matricula,foreignKey: 'id_alumno', otherKey: 'id_distribucion_ambiente' });
DistribucionAmbiente.belongsToMany(Alumno, { through: Matricula,foreignKey: 'id_distribucion_ambiente', otherKey: 'id_alumno' });

export default Matricula;