const router = require("express").Router();
const User = require("../model/user");

router.get("/:email", async (req, res) => {
  try {
    const result = await User.findOne({ email: req.params.email });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/", async (req, res) => {
  console.log(req.body);
  const newUser = new User(req.body);
  try {
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
// make admin
router.put("/makeadmin", async (req, res) => {
  const email = req.body.email;

  try {
    const result = await User.updateOne(
      { email: email },
      { $set: { isAdmin: true } }
    );

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
