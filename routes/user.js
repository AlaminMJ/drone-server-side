const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("user router get");
});

module.exports = router;
