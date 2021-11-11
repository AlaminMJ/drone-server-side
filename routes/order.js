const router = require("express").Router();
const Order = require("../model/order");
router.post("/", async (req, res) => {
  const { email, name, number, address, amount, quantity, product } = req.body;
  const NewOrder = new Order({
    email,
    name,
    number,
    address,
    quantity,
    amount,
    product,
  });
  try {
    const result = await NewOrder.save();
    res.status(201).json(result);
  } catch {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
