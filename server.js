const express = require("express");
const path = require("path");

const app = express();

// Middleware to serve static files (React frontend)
//app.use(express.static(path.join(__dirname, "client/build")));

// Handle all routes and return index.html (React will handle routing)
app.get("*", (req, res) => {
//  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Define a simple API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Set the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
