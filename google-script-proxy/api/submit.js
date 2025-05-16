// api/submit.js

const fetch = require("node-fetch");

module.exports = async (req, res) => {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method === "POST") {
    try {
      const body = [];

      req.on("data", chunk => {
        body.push(chunk);
      });

      req.on("end", async () => {
        const parsedBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(parsedBody);

        const response = await fetch("https://script.google.com/macros/s/AKfycbxSbgUPMMZ90YDGDBK9FoDTbtFekfmd_sfP1VFiizs3xDbqLJqLCZbdv6SKfpqSlGVM/exec", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params
        });

        const text = await response.text();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        return res.status(200).send(text);
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
