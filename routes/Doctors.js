const express = require("express");
const router = express.Router();

const Stratford = require("../data/Stratford.json");
const Harrow = require("../data/Harrow.json");
const Heathrow = require("../data/Heathrow.json");

router.get("/", (req, res) => {
  let doctors = Stratford[Object.keys(Stratford)[1]];
  res.send(doctors);
});
router.get("/Harrow", (req, res) => {
  let doctors = Harrow[Object.keys(Harrow)[1]];
  res.send(doctors);
});
router.get("/Heathrow", (req, res) => {
  let doctors = Heathrow[Object.keys(Heathrow)[1]];
  res.send(doctors);
});
module.exports = router;