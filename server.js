const express = require("express");
const mock = require("./src/mockData/navigation");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

var whitelist = [
  "https://wayfair-transportation-fe-53a645.netlify.app/",
  "http://localhost:3000/",
];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Welcome to node app");
});
app.get("/nav-menus", (req, res) => {
  res.send(mock);
});
app.listen(PORT, () => {
  console.log("app Start");
});
