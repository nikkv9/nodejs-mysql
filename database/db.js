const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejs-course",
  password: "your password",
});
pool.getConnection((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("mysql db is connected!");
  }
});

//promise() allows to write js promises
module.exports = pool;
