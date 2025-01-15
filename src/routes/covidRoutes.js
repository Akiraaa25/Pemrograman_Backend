const express = require('express');
const router = express.Router();
const CovidController = require('../controllers/CovidController');

// Routes
// Get all patients
router.get('/', CovidController.getAllPatients);

// Add a new patient
router.post('/', CovidController.addPatient);

// Update a patient by ID
router.put('/:id', CovidController.updatePatient);  

// Delete a patient by ID
router.delete('/:id', CovidController.deletePatient);  

// Get a patient by ID
router.get('/:id', CovidController.getPatientById);

// Search patients by name
router.get('/search/:name', CovidController.searchPatientByName);

// Get positive patients
router.get('/status/positive', CovidController.getPositivePatients);  

// Get recovered patients
router.get('/status/recovered', CovidController.getRecoveredPatients);  

// Get dead patients
router.get('/status/dead', CovidController.getDeadPatients);  

module.exports = router;
