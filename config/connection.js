// Import necessary modules
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Set the port for the server
const PORT = process.env.PORT || 3001;
// Initialize the Express application
const app = express();