const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

// template engine (ejs)
app.set("view engine", "ejs");
app.set("views", "views");

require("./database/db");

const errorCtrlr = require("./controllers/error");

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

// use for files from public folder (css,js etc.)
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use("/admin", adminRoutes);

// for ejs page
app.use(errorCtrlr.getPageNotFound);

app.listen(port, (req, res) => {
  console.log(`server is running at ${port}`);
});
// for html page
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, "./views/html/pageNotFound.html"));
// });

// middleware
// app.use((req, res, next) => {
//   console.log("1st mdlwr");
//   next(); //this allows to request the next middleware
// });
