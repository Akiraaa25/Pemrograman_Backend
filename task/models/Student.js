// Import koneksi database
const db = require("../config/database");

class Student {
  static async all() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students";
      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static async create(data) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO students (nama) VALUES (?)";
      db.query(query, [data.nama], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve({
            id: results.insertId,
            ...data,
          });
        }
      });
    });
  }
}

module.exports = Student;
