// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost', 
  username: 'root', 
  password: '', 
  database: 'covid_db', 
});

module.exports = sequelize;
