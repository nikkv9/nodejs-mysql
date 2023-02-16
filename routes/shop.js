const express = require("express");
const router = express.Router();

// const path = require("path");

const shopCtrlr = require("../controllers/shop");

// for ejs files
router.get("/", shopCtrlr.getIndex);
router.get("/products", shopCtrlr.getProducts);
router.get("/products/:productId", shopCtrlr.getProduct);

// // render html files
// router.get("/", (req, res) => {
//   console.log(adminRoutes.products);
//   res.sendFile(path.join(__dirname, "../views/html/shop.html"));
// });

module.exports = router;
