// Import necessary modules
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Set the port for the server
const PORT = process.env.PORT || 3001;
// Initialize the Express application
const app = express();
// Middleware to parse URL-encoded data and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Use the routes defined in the routes folder
app.use(routes);a

// Start the server once the database connection is open
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});