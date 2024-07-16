const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbCon = require("./db/dbCon");
const helmet = require("helmet");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
dotenv.config();
app.use(cors());
app.use(helmet());

const PORT = process.env.PORT || 5000;
const placeRouter = require("./routes/placesRoute");
const userRouter = require("./routes/userRoute");

app.get("/", (req, res) => {
  res.send("Welcome to Spot Finder");
});

app.use("/places", placeRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  dbCon();
});
