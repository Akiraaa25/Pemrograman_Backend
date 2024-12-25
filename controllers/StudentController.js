const students = require("../data/students");

class StudentController {
  // Menampilkan semua data students
  static index(req, res) {
    res.status(200).json(students);
  }

  // Menambahkan data student baru
  static store(req, res) {
    const { name, age, major } = req.body;
    const id = students.length + 1;
    const newStudent = { id, name, age, major };
    students.push(newStudent);
    res.status(201).json(newStudent);
  }

  // Mengupdate data student berdasarkan ID
  static update(req, res) {
    const { id } = req.params;
    const { name, age, major } = req.body;
    const student = students.find((s) => s.id === parseInt(id));

    if (student) {
      student.name = name || student.name;
      student.age = age || student.age;
      student.major = major || student.major;
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  }

  // Menghapus data student berdasarkan ID
  static destroy(req, res) {
    const { id } = req.params;
    const index = students.findIndex((s) => s.id === parseInt(id));

    if (index !== -1) {
      students.splice(index, 1);
      res.status(200).json({ message: "Student deleted successfully" });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  }
}

module.exports = StudentController;
