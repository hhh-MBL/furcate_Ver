const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000; // Change this if needed

app.use(cors()); // Allow all origins
app.use(express.json()); // Enable JSON body parsing

const version = "1.0.0"; // Change this to update the version dynamically

// GET endpoint for version
app.get("/api/ver", (req, res) => {
    res.json({ version: version });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
