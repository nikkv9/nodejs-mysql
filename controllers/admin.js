const db = require("../database/db");

// add product data
exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const sql =
    "INSERT INTO products (title, imageUrl, price, description) VALUES(?, ?, ?, ?)";
  db.query(sql, [title, imageUrl, price, description], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
};

// get add product page
exports.getAddProduct = (req, res) => {
  res.render("admin/addProduct", {
    pageTitle: "Add Product",
    path: "/admin/addProduct",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

// delete a product
exports.deleteProduct = (req, res) => {
  const prodId = req.params.productId;
  const sql = "DELETE FROM products WHERE id =?";
  db.query(sql, [prodId], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
};

// get edit product page
exports.getEditProduct = (req, res) => {
  const prodId = req.params.productId;
  const sql = "SELECT * FROM products WHERE id=?";
  db.query(sql, [prodId], (err, product) => {
    if (err) {
      console.log(err);
    } else {
      res.render("admin/editProduct", {
        product: product[0],
        pageTitle: "Product edit",
        path: "/admin/edit",
      });
    }
  });
};

// edit product details
exports.postEditProduct = (req, res) => {
  const id = req.params.productId;
  const updateData = req.body;
  const sql = "UPDATE products SET ? WHERE id=?";
  db.query(sql, [updateData, id], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
};
