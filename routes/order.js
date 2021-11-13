const router = require("express").Router();
const Order = require("../model/order");
router.post("/", async (req, res) => {
  const { email, name, number, address, quantity, product } = req.body;
  const NewOrder = new Order({
    email,
    name,
    number,
    address,
    quantity,
    product,
  });
  try {
    const result = await NewOrder.save();
    res.status(201).json(result);
  } catch {
    res.status(500).json({ message: "server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const result = await Order.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const result = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const result = await Order.findByIdAndUpdate(req.params.id, {
      $set: { status: "shoped" },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
