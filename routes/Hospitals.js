const express = require("express");
const router = express.Router();
const Stratford = require("../data/Stratford.json");
const Harrow = require("../data/Harrow.json");
const Heathrow = require("../data/Heathrow.json");

router.get("/", (req, res) => {
  let hospitals = Stratford[Object.keys(Stratford)[3]];
  res.send(hospitals);
});

router.get("/Harrow", (req, res) => {
  let hospitals = Harrow[Object.keys(Harrow)[3]];
  res.send(hospitals);
});

router.get("/Heathrow", (req, res) => {
  let hospitals = Heathrow[Object.keys(Heathrow)[3]];
  res.send(hospitals);
});
module.exports = router;
