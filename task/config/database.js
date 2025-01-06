// Import mysql
const mysql = require("mysql");

// Import dotenv dan jalankan method config
require("dotenv").config();

// Destructuring object process.env
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

// Update konfigurasi database dari file .env
const db = mysql.createConnection({
  host: DB_HOST || "localhost",       
  user: DB_USERNAME || "root",      
  password: DB_PASSWORD || "",       
  database: DB_DATABASE || "express_student_api", 
});

/**
 * Connect ke database menggunakan method connect.
 * Menerima parameter callback.
 */
db.connect((err) => {
  if (err) {
    console.error(`Error connecting to database: ${err.stack}`);
    return;
  }
  console.log("Connected to database successfully");
});

module.exports = db;
