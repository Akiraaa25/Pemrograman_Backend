// Import express dan controller
const express = require("express");
const StudentController = require("../controllers/StudentController");

// Buat object router
const router = express.Router();

// Endpoint untuk resource "students"
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

module.exports = router;
