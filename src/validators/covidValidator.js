const { body } = require('express-validator');

exports.validateCovidData = [
    body('name').notEmpty().withMessage('Name is required'),
    body('phone').notEmpty().withMessage('Phone is required'),
    body('address').notEmpty().withMessage('Address is required'),
    body('status').notEmpty().withMessage('Status is required')
];
