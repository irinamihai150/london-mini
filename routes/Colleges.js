const express = require("express");
const router = express.Router();
const Stratford = require("../data/Stratford.json");
const Harrow = require("../data/Harrow.json");
const Heathrow = require("../data/Heathrow.json");

router.get("/", (req, res) => {
  let collegesStratford = Stratford[Object.keys(Stratford)[2]];
  res.send(collegesStratford);
});
router.get("/Harrow", (req, res) => {
  let collegesHarrow = Harrow[Object.keys(Harrow)[2]];
  res.send(collegesHarrow);
});
router.get("/Heathrow", (req, res) => {
  let collegesHeathrow = Heathrow[Object.keys(Heathrow)[2]];
  res.send(collegesHeathrow);
});
module.exports = router;
