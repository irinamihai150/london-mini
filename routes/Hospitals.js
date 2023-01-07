const express = require("express");
const router = express.Router();
const Stratford = require("../data/Stratford.json");
const Harrow = require("../data/Harrow.json");
const Heathrow = require("../data/Heathrow.json");

router.get("/", (req, res) => {
  let hospitalsStratford = Stratford[Object.keys(Stratford)[3]];
  res.send(hospitalsStratford);
});

router.get("/Harrow", (req, res) => {
  let hospitalsHarrow = Harrow[Object.keys(Harrow)[3]];
  res.send(hospitalsHarrow);
});

router.get("/Heathrow", (req, res) => {
  let hospitalsHeathrow = Heathrow[Object.keys(Heathrow)[3]];
  res.send(hospitalsHeathrow);
});
module.exports = router;
