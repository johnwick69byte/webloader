const express = require("express");
const axios = require("axios");
const app = express();

app.get("/proxy", async (req, res) => {
  const url = req.query.url;
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error loading URL");
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
