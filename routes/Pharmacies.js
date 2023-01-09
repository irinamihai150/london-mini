const express = require("express");
const router = express.Router();

const Stratford = require("../data/Stratford.json");
const Harrow = require("../data/Harrow.json");
const Heathrow = require("../data/Heathrow.json");

router.get("/Stratford", (req, res) => {
  let pharmaciesStratford = Stratford[Object.keys(Stratford)[0]];
  res.send(pharmaciesStratford);
});
router.get("/Harrow", (req, res) => {
  let pharmaciesHarrow = Harrow[Object.keys(Harrow)[0]];
  res.send(pharmaciesHarrow);
});
router.get("/Heathrow", (req, res) => {
  let pharmaciesHeathrow = Heathrow[Object.keys(Heathrow)[0]];
  res.send(pharmaciesHeathrow);
});
module.exports = router;
