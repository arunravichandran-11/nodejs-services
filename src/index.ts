import express from "express";
import { NavigationData } from "./mockData/navigation";
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/nav-menu", (req, res) => {
  res.send(NavigationData);
});

app.listen(PORT, () => {
  // console.log(`server started at ${port}`);
});
