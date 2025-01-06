// Import Model Student
const Student = require("../models/Student");

class StudentController {
  async index(req, res) {
    const students = await Student.all();

    const data = {
      message: "Menampilkan semua students",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    try {
      const { nama } = req.body; // Data input dari request body
      const student = await Student.create({ nama }); // Memanggil method create

      const data = {
        message: "Menambahkan data student",
        data: student,
      };

      res.status(201).json(data);
    } catch (err) {
      res.status(500).json({
        message: "Gagal menambahkan data student",
        error: err.message,
      });
    }
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus student id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

module.exports = new StudentController();
