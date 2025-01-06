const Student = require("../models/Student");

class StudentController {
  // Menampilkan semua student
  async index(req, res) {
    try {
      const students = await Student.all();
      res.json({ message: "Menampilkan semua students", data: students });
    } catch (error) {
      res.status(500).json({ message: "Gagal mengambil data students", error: error.message });
    }
  }

  // Menambahkan data student baru
  async store(req, res) {
    try {
      const { name, age, major } = req.body;
      if (!name || !age || !major) {
        return res.status(400).json({ message: "Field name, age, major wajib diisi" });
      }
      const newStudent = await Student.create({ name, age, major });
      res.status(201).json({ message: "Berhasil menambahkan data student", data: newStudent });
    } catch (error) {
      res.status(500).json({ message: "Gagal menambahkan data student", error: error.message });
    }
  }

  // Mengupdate data student
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, age, major } = req.body;
      if (!name || !age || !major) {
        return res.status(400).json({ message: "Field name, age, major wajib diisi" });
      }
      const updatedStudent = await Student.update(id, { name, age, major });
      if (!updatedStudent) {
        return res.status(404).json({ message: `Student dengan id ${id} tidak ditemukan` });
      }
      res.json({ message: `Berhasil mengupdate student dengan id ${id}`, data: updatedStudent });
    } catch (error) {
      res.status(500).json({ message: "Gagal mengupdate student", error: error.message });
    }
  }

  // Menghapus data student
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Student.delete(id);
      if (!deleted) {
        return res.status(404).json({ message: `Student dengan id ${id} tidak ditemukan` });
      }
      res.json({ message: `Berhasil menghapus student dengan id ${id}` });
    } catch (error) {
      res.status(500).json({ message: "Gagal menghapus student", error: error.message });
    }
  }
}

module.exports = new StudentController();
