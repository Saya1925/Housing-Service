const mysql = require('mysql2/promise');

// Set the connection properties
const connection = mysql.createPool({
  host: 'housingservice.c33lugaz7gku.us-east-1.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: '950Housing',
  database: 'HousingService',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export the connection
module.exports = connection;