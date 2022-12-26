const express = require("express");
const app = express();
const data = require("./data/Stratford.json");

app.get("/", function (req, res) {
  res.send("Hello!");
});
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});
app.get("/pharmacies", (req, res) => {
  let pharmacies = data[Object.keys(data)[0]];
  res.send(pharmacies);
});
app.get("/colleges", (req, res) => {
  let colleges = data[Object.keys(data)[2]];
  res.send(colleges);
});
app.get("/doctors", (req, res) => {
  let doctors = data[Object.keys(data)[1]];
  res.send(doctors);
});
app.get("/hospitals", (req, res) => {
  let hospitals = data[Object.keys(data)[3]];
  res.send(hospitals);
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
