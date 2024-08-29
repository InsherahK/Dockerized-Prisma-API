const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST_DOCKER,
 // host: process.env.NODE_ENV === 'docker' ? process.env.DB_HOST_DOCKER : process.env.DB_HOST_DEV,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  } else {
    console.log('Connected to the MySQL database');
  }
});

module.exports = connection;
