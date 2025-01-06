// app.js
console.log(process.env);
const express = require("express");
const db = require("./config/database");  // import database connection
const app = express();

// Set the application port
const port = process.env.APP_PORT || 3000;

// Example route to fetch students from database
app.get("/students", (req, res) => {
  const query = "SELECT * FROM students";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching students");
      return;
    }
    res.json(results);
  });
});

// Start the application
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
