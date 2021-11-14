const express = require("express");
const mock = require("./src/mockData/navigation");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to node app");
});
app.get("/nav-menus", (req, res) => {
  res.send(mock);
});
app.listen(PORT, () => {
  console.log("app Start");
});
