const express = require("express");
const cors = require("cors");

const app = express();
const pharmacyRoute = require("./routes/Pharmacies.js");
const collegesRoute = require("./routes/Colleges.js");
const doctorsRoute = require("./routes/Doctors.js");
const hospitalsRoute = require("./routes/Hospitals.js");

app.use(express.json());
app.use(cors());
app.use("/pharmacies", pharmacyRoute);
app.use("/colleges", collegesRoute);
app.use("/doctors", doctorsRoute);
app.use("/hospitals", hospitalsRoute);

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

// app.listen(3000, function () {
//   console.log("Server is listening on port 3000. Ready to accept requests!");
// });
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port: ${port}`));
