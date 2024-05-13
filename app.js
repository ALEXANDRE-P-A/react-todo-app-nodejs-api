require("dotenv").config();
const initdata = require("./data-init.js");

const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/", express.static(path.join(__dirname, "/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.get("/datajson", (req, res) => {
  res.json(initdata);
});

app.listen(PORT, _ => {
  console.log(`Application listenning at http://127.0.0.1:${PORT}`);
});