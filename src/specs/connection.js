const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '210894',
  database: 'gimnasio'
});

export default conexion