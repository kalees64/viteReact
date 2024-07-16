const mongoose = require("mongoose");

const con = async () => {
  const res = await mongoose.connect(process.env.MONGO_URI);
  res
    ? console.log("Connection Success")
    : console.log("Connection Not Successful");
};

module.exports = con;
