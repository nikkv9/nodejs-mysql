const express = require("express");
const router = express.Router();

// const path = require("path");

const adminCtrlr = require("../controllers/admin");

// for ejs files
router.get("/addProduct", adminCtrlr.getAddProduct);
router.post("/addProduct", adminCtrlr.postAddProduct);
router.get("/delete/:productId", adminCtrlr.deleteProduct);
router.get("/edit/:productId", adminCtrlr.getEditProduct);
router.post("/update/:productId", adminCtrlr.postEditProduct);

// render html files
// router.get("/addProduct", (req, res) => {
//   res.sendFile(path.join(__dirname, "../views/html/addProduct.html"));
// });
module.exports = router;
