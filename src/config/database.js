const mysql = require('mysql2');

const { Config } = require('./config');

const connection = mysql.createConnection({
    host: Config.DB_HOST,
    user: Config.DB_USER,
    password: Config.DB_PASSWORD,
    database: Config.DB_DATABASE
});

connection.connect((error) => {
    if (error) {
        console.log('El error: ' + error);
        return
    }
    console.log('¡Conectado a la base de datos');
});

module.exports = connection;