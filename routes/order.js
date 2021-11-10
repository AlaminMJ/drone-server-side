const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("order router get");
});

module.exports = router;
