const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/*", async (req, res) => {
  try {
    const response = await fetch(`https://api.binance.com${req.url}`, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    const body = await response.text();
    res.status(response.status).send(body);
  } catch (error) {
    res.status(500).send("Erro no proxy: " + error);
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🔥 Proxy Binance rodando na porta ${PORT}`);
});
