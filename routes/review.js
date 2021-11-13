const router = require("express").Router();
const Review = require("../model/review");
// get all reviews
router.get("/", async (req, res) => {
  try {
    const result = await Review.find({});
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "server error" });
  }
});

// add a review
router.post("/", async (req, res) => {
  const newReview = new Review({
    name: req.body.name,
    email: req.body.email,
    img: req.body.img,
    message: req.body.message,
    rating: req.body.rating,
  });
  try {
    const result = await newReview.save();
    res.status(201).json(result);
  } catch {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
