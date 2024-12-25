const express = require("express");
const app = express();
const router = require("./routes/api");

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan router
app.use(router);

// Tentukan port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
