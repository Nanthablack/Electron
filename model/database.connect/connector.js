const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    database: 'model',
    port: 3306,
    user: 'root',
    password: 'er0855779123',
});

connect.connect;
module.exports = connect;