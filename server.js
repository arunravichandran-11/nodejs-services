const express = require("express");
const mock = require("./mockData/navigation");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

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

app.listen(process.env.PORT, () => {
  console.log(`app Starts: ${process.env.PORT}`);
});
