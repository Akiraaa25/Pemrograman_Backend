const express = require('express');
const bodyParser = require('body-parser');
const covidRoutes = require('./src/routes/covidRoutes'); // Rute di folder src/routes

const app = express();

// Middleware untuk parsing JSON request body
app.use(bodyParser.json());

// Menggunakan rute dengan prefix /api
app.use('/api/patients', covidRoutes);

// Menjalankan server di port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
