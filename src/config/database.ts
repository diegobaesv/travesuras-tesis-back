const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
export const sequelize = new Sequelize(
    'bxzj94cwirjuk7awm0r2', //db_name
    'unvma5zwfprq4pulnqrr', //username
    '5d66b5f134a750b2b5495cdafb6e3742e7064fad09e6314e2adc6ee09be3a22a', //password
    {
        host: 'bxzj94cwirjuk7awm0r2-postgresql.services.clever-cloud.com',
        dialect: 'postgres', 
        port: '5432',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false //VER MENSAJES POR CONSOLA
        
    }
    );