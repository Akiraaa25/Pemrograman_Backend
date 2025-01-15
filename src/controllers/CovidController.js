const Covid = require('../models/covid');
const Sequelize = require('sequelize');
const { Op } = Sequelize; 

// Get all patients
exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Covid.findAll();
        if (patients.length > 0) {
            res.status(200).json({
                message: 'Get All Resource',
                data: patients
            });
        } else {
            res.status(200).json({
                message: 'Data is empty'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving data',
            error
        });
    }
};

// Add a new patient
exports.addPatient = async (req, res) => {
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;
    try {
        const newPatient = await Covid.create({
            name, phone, address, status, in_date_at, out_date_at
        });
        res.status(201).json({
            message: 'Resource is added successfully',
            data: newPatient
        });
    } catch (error) {
        res.status(422).json({
            message: 'All fields must be filled correctly',
            error
        });
    }
};

// Update a patient
exports.updatePatient = async (req, res) => {
    const { id } = req.params;
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;
    try {
        const patient = await Covid.findByPk(id);
        if (!patient) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        await patient.update({
            name, phone, address, status, in_date_at, out_date_at
        });
        res.status(200).json({
            message: 'Resource is updated successfully',
            data: patient
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating resource',
            error
        });
    }
};

// Delete a patient
exports.deletePatient = async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await Covid.findByPk(id);
        if (!patient) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        await patient.destroy();
        res.status(200).json({
            message: 'Resource is deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting resource',
            error
        });
    }
};

// Get patient by ID
exports.getPatientById = async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await Covid.findByPk(id);
        if (!patient) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json({
            message: 'Get Detail Resource',
            data: patient
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving resource',
            error
        });
    }
};

// Search patient by name
exports.searchPatientByName = async (req, res) => {
    const { name } = req.params;
    try {
        const patients = await Covid.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%` // Pencarian dengan LIKE
                }
            }
        });
        if (patients.length > 0) {
            res.status(200).json({
                message: 'Search Resource by name',
                data: patients
            });
        } else {
            res.status(404).json({ message: 'Resource not found' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error searching resource',
            error
        });
    }
};

// Get positive patients
exports.getPositivePatients = async (req, res) => {
    try {
        const patients = await Covid.findAll({
            where: { status: 'Positive' }
        });
        if (patients.length > 0) {
            res.status(200).json({
                message: 'Get Positive Resource',
                data: patients
            });
        } else {
            res.status(404).json({ message: 'No positive patients found' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving positive patients',
            error
        });
    }
};

// Get recovered patients
exports.getRecoveredPatients = async (req, res) => {
    try {
        const patients = await Covid.findAll({
            where: { status: 'Recovered' }
        });
        if (patients.length > 0) {
            res.status(200).json({
                message: 'Get Recovered Resource',
                data: patients
            });
        } else {
            res.status(404).json({ message: 'No recovered patients found' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving recovered patients',
            error
        });
    }
};

// Get dead patients
exports.getDeadPatients = async (req, res) => {
    try {
        const patients = await Covid.findAll({
            where: { status: 'Dead' }
        });
        if (patients.length > 0) {
            res.status(200).json({
                message: 'Get Dead Resource',
                data: patients
            });
        } else {
            res.status(404).json({ message: 'No dead patients found' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving dead patients',
            error
        });
    }
};
