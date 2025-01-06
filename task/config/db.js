const mysql = require('mysql2/promise');

// Membuat koneksi ke database
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',  
  database: 'express_student_api',
});

module.exports = db;
