const fetch = require("node-fetch");

module.exports = async (req, res) => {
  // Always set these headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight (OPTIONS) request
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method === "POST") {
    try {
      let body = "";
      req.on("data", chunk => {
        body += chunk.toString();
      });

      req.on("end", async () => {
        const params = new URLSearchParams(body);

        const response = await fetch("https://script.google.com/macros/s/AKfycbxSbgUPMMZ90YDGDBK9FoDTbtFekfmd_sfP1VFiizs3xDbqLJqLCZbdv6SKfpqSlGVM/exec", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: params
        });

        const text = await response.text();

        return res.status(200).send(text);
      });
    } catch (error) {
      console.error("Server error:", error);
      return res.status(500).send("Internal Server Error");
    }
  } else {
    return res.status(405).send("Method Not Allowed");
  }
};
