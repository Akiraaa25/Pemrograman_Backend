const express = require('express');
const router = express.Router();
const CovidController = require('../controllers/CovidController');

// Routes
// Get all patients
router.get('/', CovidController.getAllPatients);

// Add a new patient
router.post('/', CovidController.addPatient);

// Update a patient by ID
router.put('/:id', CovidController.updatePatient);  // Pastikan ini ada di controller

// Delete a patient by ID
router.delete('/:id', CovidController.deletePatient);  // Pastikan ini ada di controller

// Get a patient by ID
router.get('/:id', CovidController.getPatientById);

// Search patients by name
router.get('/search/:name', CovidController.searchPatientByName);

// Get positive patients
router.get('/status/positive', CovidController.getPositivePatients);  // Pastikan ada di controller

// Get recovered patients
router.get('/status/recovered', CovidController.getRecoveredPatients);  // Pastikan ada di controller

// Get dead patients
router.get('/status/dead', CovidController.getDeadPatients);  // Pastikan ada di controller

module.exports = router;
