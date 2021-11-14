import express from "express";
import { NavigationData } from "./mockData/navigation";
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/nav-menu", (req, res) => {
  res.send(NavigationData);
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
