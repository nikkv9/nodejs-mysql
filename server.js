const http = require("http");

const port = 5000;

// just creating file with that
const fs = require("fs");
fs.writeFileSync("file.txt", "Node js is best");

const server = http.createServer((req, res) => {
  //   console.log("done!");

  res.write("<html>");
  res.write("<head> <title>Node js</title></head>");
  res.write("<body><h1>Hello Node Js</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(port, () => {
  console.log(`server is running at ${port}`);
});
