const express = require("express");
const router = express.Router();

const Stratford = require("../data/Stratford.json");
const Harrow = require("../data/Harrow.json");
const Heathrow = require("../data/Heathrow.json");

router.get("/", (req, res) => {
  let pharmacies = Stratford[Object.keys(Stratford)[0]];
  res.send(pharmacies);
});
router.get("/Harrow", (req, res) => {
  let pharmacies = Harrow[Object.keys(Harrow)[0]];
  res.send(pharmacies);
});
router.get("/Heathrow", (req, res) => {
  let pharmacies = Heathrow[Object.keys(Heathrow)[0]];
  res.send(pharmacies);
});
module.exports = router;
