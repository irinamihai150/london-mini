const express = require("express");
const router = express.Router();
const Stratford = require("../data/Stratford.json");
const Harrow = require("../data/Harrow.json");
const Heathrow = require("../data/Heathrow.json");

router.get("/", (req, res) => {
  let colleges = Stratford[Object.keys(Stratford)[2]];
  res.send(colleges);
});
router.get("/Harrow", (req, res) => {
  let colleges = Harrow[Object.keys(Harrow)[2]];
  res.send(colleges);
});
router.get("/Heathrow", (req, res) => {
  let colleges = Heathrow[Object.keys(Heathrow)[2]];
  res.send(colleges);
});
module.exports = router;
