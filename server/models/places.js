const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema(
  {
    placeName: {
      type: String,
      required: true,
    },
    placeCity: {
      type: String,
      required: true,
    },
    placeDistrict: {
      type: String,
      required: true,
    },
    placePincode: {
      type: String,
      required: true,
    },
    placeMapLink: {
      type: String,
      required: true,
    },
    placeID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const places = mongoose.model("places", placesSchema);

module.exports = places;
