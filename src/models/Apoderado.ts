import Alumno from "./Alumno";
import Matricula from "./Matricula";

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database')

const Apoderado = sequelize.define('apoderados',{
    id_apoderado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    documento_identidad:{
        type: DataTypes.STRING(8)
    },
    apellido_paterno: {
        type: DataTypes.STRING(250)
    },
    apellido_materno: {
        type: DataTypes.STRING(250)
    },
    nombres: {
        type: DataTypes.STRING(500)
    },
    fecha_nacimiento: {
        type: DataTypes.STRING(250)
    },
    fecha_inscripcion: {
        type: DataTypes.DATEONLY
    },
    fecha_baja: {
        type: DataTypes.DATEONLY
    },
    sexo: {
        type: DataTypes.STRING(1)
    },
    telefono: {
        type: DataTypes.STRING(20)
    },
    direccion_casa:{
        type: DataTypes.STRING(1024)
    },
    estado:{
        type: DataTypes.BOOLEAN 
    }
},{
    timestamps: false
}
);

Apoderado.hasMany(Alumno,{foreignKey:'id_apoderado', sourceKey: 'id_apoderado'} );
Alumno.belongsTo(Apoderado, {foreignKey: 'id_apoderado',sourceKey: 'id_apoderado'});

export default Apoderado;