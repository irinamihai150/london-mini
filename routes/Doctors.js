const express = require("express");
const router = express.Router();

const Stratford = require("../data/Stratford.json");
const Harrow = require("../data/Harrow.json");
const Heathrow = require("../data/Heathrow.json");

router.get("/Stratford", (req, res) => {
  let doctorsStratford = Stratford[Object.keys(Stratford)[1]];
  res.send(doctorsStratford);
});
router.get("/Harrow", (req, res) => {
  let doctorsHarrow = Harrow[Object.keys(Harrow)[1]];
  res.send(doctorsHarrow);
});
router.get("/Heathrow", (req, res) => {
  let doctorsHeathrow = Heathrow[Object.keys(Heathrow)[1]];
  res.send(doctorsHeathrow);
});

let allCategory = [
  "/:city/",
  "/:city/:doctors",
  "/:city/:colleges",
  "/:city/:hospitals",
  "/:city/:pharmacies",
];
router.get(allCategory, (req, res) => {
  let allDoctors = [...doctorsStratford, ...doctorsHarrow, ...doctorsHeathrow];
  let allColleges = [
    ...collegesStratford,
    ...collegesHarrow,
    ...collegesHeathrow,
  ];
  let allHospitals = [
    ...hospitalsStratford,
    ...hospitalsHarrow,
    ...hospitalssHeathrow,
  ];
  let allPharmacies = [
    ...pharmaciessStratford,
    ...pharmaciessHarrow,
    ...pharmaciessHeathrow,
  ];

  // res.send(
  //   JSON.stringify(allDoctors, allColleges, allHospitals, allPharmacies)
  // );
  res.send(allDoctors);
});
module.exports = router;
