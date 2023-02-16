const db = require("../database/db");

// get home page
exports.getIndex = (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, product) => {
    if (err) {
      console.log(err);
    } else {
      res.render("shop/index", {
        prods: product,
        pageTitle: "Shop",
        path: "/",
      });
    }
  });
};

// get all product list
exports.getProducts = (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("shop/productList", {
        prods: data,
        pageTitle: "All Products",
        path: "/products",
      });
    }
  });
};

// get selected product
exports.getProduct = (req, res) => {
  const id = req.params.productId;
  const sql = "SELECT * FROM products WHERE products.id=?";
  db.query(sql, [id], (err, product) => {
    if (err) {
      console.log(err);
    } else {
      res.render("shop/productDetail", {
        prods: product[0],
        pageTitle: "Product Details",
        path: "/products",
      });
    }
  });
};
