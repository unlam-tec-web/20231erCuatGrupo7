import { DB_PORT, DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD } from './config.js';
import mysql from 'mysql';

const conexion = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});

conexion.connect((err) => {
    if (err) {
        conexion.log('Ha ocurrido un error :' + err)
    } else { console.log(' La base de datos se conecto!!!') }
});

export default conexion