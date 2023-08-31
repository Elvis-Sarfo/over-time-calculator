'use strict;'
const mysql = require('mysql2')
require('dotenv').config()
const connection = mysql.createConnection({
    host: process.env.HOSTNAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
})
connection.connect(err => {
    if (err) {
        console.error(err)
    } else {
        console.log('connected to db...');
    }
})
module.exports = connection;