const express = require("express");
const route = express.Router();

const placeController = require("../controllers/placesControl");

route.get("/", placeController.getPlaces);
route.post("/add", placeController.addPlace);

module.exports = route;
