import Matricula from "./Matricula";
import Pago from "./Pago";

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database')

const Usuario = sequelize.define('usuarios',{
    id_usuario :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    correo:{
        type: DataTypes.STRING(250)
    },
    username:{
        type: DataTypes.STRING(20)
    },
    clave:{
        type: DataTypes.STRING(250)
    },
    estado:{
        type: DataTypes.BOOLEAN 
    }
},{
    timestamps: false
}
);

Usuario.hasMany(Matricula,{foreignKey:'id_usuario', sourceKey: 'id_usuario'} );
Matricula.belongsTo(Usuario, {foreignKey: 'id_usuario',sourceKey: 'id_usuario'});

Usuario.hasMany(Pago, {foreignKey: 'id_usuario',sourceKey: 'id_usuario'});
Pago.belongsTo(Usuario, {foreignKey:'id_usuario', sourceKey: 'id_usuario'});


export default Usuario;


