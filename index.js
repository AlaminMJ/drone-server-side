const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const orederRoute = require("./routes/order");
const productRoute = require("./routes/product");
const reviewRoute = require("./routes/review");
const app = express();
// Database conntetion
mongoose.connect(
  "mongodb+srv://user1:user1@cluster0.begpz.mongodb.net/drone?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Database connection successful");
    } else {
      console.log("Database connection fuilur");
    }
  }
);

const port = process.env.PORT || 5000;
// middlewere
app.use(cors());
app.use(express.json());
// Route
app.use("/users", userRoute);
app.use("/orders", orederRoute);
app.use("/products", productRoute);
app.use("/reviews", reviewRoute);

app.get("/", (req, res) => {
  res.send("Ok vai thik ace");
});
app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
