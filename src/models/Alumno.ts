import Matricula from "./Matricula";
import Pago from "./Pago";

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database')

const Alumno = sequelize.define('alumnos',{
    id_alumno :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    id_apoderado: {
        type: DataTypes.INTEGER,
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
    tipo_sangre: {
        type: DataTypes.STRING(5)
    },
    telefono_emergencia: {
        type: DataTypes.STRING(20)
    },
    direccion_casa:{
        type: DataTypes.STRING(1024)
    },
    nombre_imagen: {
        type: DataTypes.STRING(1024)
    },
    host_imagen: {
        type: DataTypes.STRING(1024)
    },
    estado:{
        type: DataTypes.BOOLEAN 
    }
},{
    timestamps: false
}
);
/*
Alumno.hasMany(Matricula,{foreignKey:'id_alumno', sourceKey: 'id_alumno'} );
Matricula.belongsTo(Alumno, {foreignKey: 'id_alumno',sourceKey: 'id_alumno'});¨*/

Alumno.hasMany(Pago, {foreignKey: 'id_alumno',sourceKey: 'id_alumno'});
Pago.belongsTo(Alumno, {foreignKey:'id_alumno', sourceKey: 'id_alumno'});

export default Alumno;