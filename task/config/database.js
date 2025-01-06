require("dotenv").config();
const mysql = require("mysql");

// Destructuring object dari process.env
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

// Validasi variabel lingkungan
if (!DB_HOST || !DB_PORT || !DB_USERNAME || !DB_DATABASE) {
  console.error("Error: Missing one or more required environment variables.");
  process.exit(1); // Keluar dengan status error
}

// Membuat koneksi ke database
const db = mysql.createConnection({
  host: DB_HOST || "localhost",
  port: DB_PORT || 3306,
  user: DB_USERNAME || "root",
  password: DB_PASSWORD || "",
  database: DB_DATABASE || "express_student_api",
});

// Menghubungkan ke database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:");
    console.error(err);
    return;
  }
  console.log("Connected to the database");
});

module.exports = db;
