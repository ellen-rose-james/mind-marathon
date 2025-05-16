const express = require("express");
const fetch = require("node-fetch"); // you’ll install this next
const app = express();

app.use(express.urlencoded({ extended: true })); // parse x-www-form-urlencoded

// Replace this with your actual Apps Script URL
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxSbgUPMMZ90YDGDBK9FoDTbtFekfmd_sfP1VFiizs3xDbqLJqLCZbdv6SKfpqSlGVM/exec";

app.post("/submit", async (req, res) => {
  try {
    // Forward the POST data to Google Apps Script
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(req.body),
    });

    const text = await response.text();

    // Set CORS headers on your proxy response so browser is happy
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    res.status(response.status).send(text);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).send("Proxy server error");
  }
});

// OPTIONS preflight handling
app.options("/submit", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.sendStatus(204);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
