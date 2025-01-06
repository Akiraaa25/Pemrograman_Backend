const express = require("express");
const app = express();
const apiRoutes = require("./routes/api");

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan rute API
app.use("/api", apiRoutes);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
