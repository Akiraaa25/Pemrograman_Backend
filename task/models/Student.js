const db = require('../config/db');

class Student {
  static async all() {
    const [rows] = await db.query('SELECT * FROM students');
    return rows;
  }

  static async create(data) {
    const { name, age, major } = data;
    const result = await db.query('INSERT INTO students (name, age, major) VALUES (?, ?, ?)', [name, age, major]);
    return {
      id: result.insertId,
      name,
      age,
      major
    };
  }

  static async update(id, data) {
    const { name, age, major } = data;
    const result = await db.query('UPDATE students SET name = ?, age = ?, major = ? WHERE id = ?', [name, age, major, id]);
    return result.affectedRows > 0 ? { id, name, age, major } : null;
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM students WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Student;
