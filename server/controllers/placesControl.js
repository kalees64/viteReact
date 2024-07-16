const places = require("../models/places");

const getPlaces = async (req, res) => {
  try {
    const act = await places.find();
    act.length !== 0 ? res.json(act) : res.json("no data");
  } catch (error) {
    return res.json(error);
  }
};

const addPlace = async (req, res) => {
  const { pName, pCity, pDistrict, pPincode, pLink, pID } = req.body;
  let newPlace = {
    placeName: pName,
    placeCity: pCity,
    placeDistrict: pDistrict,
    placePincode: pPincode,
    placeMapLink: pLink,
    placeID: pID,
  };
  try {
    const getPlace = await places.find({ placeID: pID });
    if (getPlace.length) {
      return res.json("Place Found");
    }
    const act = await places.insertMany(newPlace);
    return res.json(act);
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports = { getPlaces, addPlace };
