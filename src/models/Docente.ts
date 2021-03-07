import DistribucionAmbiente from "./DistribucionAmbiente";

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database')

const Docente = sequelize.define('docentes',{
    id_docente :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    documento_identidad : {
        type: DataTypes.STRING(8)
    },
    apellido_paterno : {
        type: DataTypes.STRING(250)
    },
    apellido_materno : {
        type: DataTypes.STRING(250)
    },
    nombres : {
        type: DataTypes.STRING(550)
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY
    },
    fecha_inscripcion: {
        type: DataTypes.DATEONLY
    },
    fecha_baja: {
        type: DataTypes.DATEONLY
    },
    sexo : {
        type: DataTypes.STRING(1)
    },
    especialidad : {
        type: DataTypes.STRING(6)
    },
    telefono : {
        type: DataTypes.STRING(20)
    },
    direccion_casa : {
        type: DataTypes.STRING(1024)
    },
    nombre_imagen : {
        type: DataTypes.STRING(1024)
    },
    host_imagen : {
        type: DataTypes.STRING(1024)
    },
    estado : {
        type: DataTypes.BOOLEAN 
    }
    
},{
    timestamps: false
}
);

Docente.hasMany(DistribucionAmbiente, {foreignKey: 'id_docente',sourceKey: 'id_docente'});
DistribucionAmbiente.belongsTo(Docente, {foreignKey:'id_docente', sourceKey: 'id_docente'});


export default Docente;