const router = require("express").Router();
const Product = require("../model/product");
// get one product
router.get("/:id", async (req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "server error" });
  }
});
// get all products
router.get("/", async (req, res) => {
  const query = req.query?.count;
  try {
    let result = [];
    if (!query) {
      result = await Product.find({});
    } else {
      result = await Product.find({}).limit(query);
    }

    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "server err" });
  }
});

// add a product
router.post("/", async (req, res) => {
  console.log(req.body);
  const newProduct = new Product({
    name: req.body.name,
    img: req.body.img,
    title: req.body.title,
    price: req.body.price,
    desc: req.body.desc,
  });
  try {
    const result = await newProduct.save();
    console.log(result);
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "server err" });
  }
});
// Delete a product
router.delete("/:id", async (req, res) => {
  console.log("delete requst");
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    console.log(result);
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
