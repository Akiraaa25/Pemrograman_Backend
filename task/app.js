const express = require("express");
const app = express();
const dotenv = require("dotenv");
const apiRoutes = require("./routes/api");

dotenv.config();  // Load environment variables from .env

// Middleware untuk parsing JSON body
app.use(express.json());

// Routing untuk API
app.use("/api", apiRoutes);

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
