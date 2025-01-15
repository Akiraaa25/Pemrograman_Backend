// src/models/Covid.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Covid = sequelize.define('Covid', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Positive', 'Recovered', 'Dead'),
        allowNull: false
    },
    in_date_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    out_date_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'covids',
    timestamps: false
});

module.exports = Covid;
