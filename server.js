const express = require("express");
const mock = require("./src/mockData/navigation");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to node app");
});
app.get("/nav-menus", (req, res) => {
  res.send(mock);
});
app.listen(4000, () => {
  console.log("app Start");
});
