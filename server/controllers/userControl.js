const users = require("../models/user");

const signUp = async (req, res) => {
  const { uName, uEmail, uPassword, uCity, uDistrict, uPincode } = req.body;
  const newUser = {
    userName: uName,
    userEmail: uEmail,
    userPassword: uPassword,
    userCity: uCity,
    userDistrict: uDistrict,
    userPincode: uPincode,
  };
  try {
    const getUser = await users.find({ userEmail: uEmail });
    if (getUser.length) {
      return res.json("user found");
    }
    const act = await users.insertMany(newUser);
    return res.json(act);
  } catch (error) {
    return res.json(error.message);
  }
};
const signIn = async (req, res) => {
  const { uEmail, uPassword } = req.body;
  try {
    const getUser = await users.find({
      userEmail: uEmail,
      userPassword: uPassword,
    });
    if (getUser.length) {
      return res.json(getUser);
    }
    return res.json("user not found");
  } catch (error) {
    return res.json(error.message);
  }
};
const signOut = async (req, res) => {
  res.json("Sign Out");
};
const getAllUser = async (req, res) => {
  try {
    const allUsers = await users.find();
    return res.json(allUsers);
  } catch (error) {
    return res.json(error.message);
  }
};
const updateUser = async (req, res) => {};
const updateUserPassword = async (req, res) => {};
const forgotPassword = async (req, res) => {};

module.exports = {
  signUp,
  signIn,
  signOut,
  updateUser,
  updateUserPassword,
  forgotPassword,
  getAllUser,
};
