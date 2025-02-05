const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000; // Change this if needed

app.use(cors()); // Allow all origins
app.use(express.json()); // Enable JSON body parsing

const version = "1.0.1"; // Change this to update the version dynamically

// GET endpoint for version
app.get("/api/ver", (req, res) => {
  res.json({ version: version });
});

// New endpoint for downloading the file with a renamed filename
app.get("/api/download", (req, res) => {
  // Build the new filename using the version
  const newFileName = `furcate_${version}.exe`;
  // The path to the local file "furcate.exe" (assumed to be in the same folder)
  const filePath = path.join(__dirname, "furcate.exe");
  
  // Use res.download to send the file with the new name
  res.download(filePath, newFileName, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Error downloading file");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
