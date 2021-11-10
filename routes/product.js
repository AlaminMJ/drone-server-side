const router = require("express").Router();
const Product = require("../model/product");
// get one product
router.get("/:id", async (req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "server err" });
  }
});
// get all products
router.get("/", async (req, res) => {
  try {
    const result = await Product.find({});
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "server err" });
  }
});
// get 6 product for home page
router.get("/home", async (req, res) => {
  try {
    const result = await Product.find({}).limit(6);
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "server err" });
  }
});
// add a product
router.post("/home", async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    img: req.body.img,
    title: req.body.title,
    price: req.body.price,
  });
  try {
    const result = await newProduct.save();
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "server err" });
  }
});
// Delete a product
router.delete("/id", async (req, res) => {
  try {
    const result = Product.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "server err" });
  }
});
// update a product
router.put("/id", async (req, res) => {
  try {
    const result = Product.findByIdAndUpdate(req.params.id, {
      $set: { status: "diactive" },
    });
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "server err" });
  }
});

module.exports = router;
