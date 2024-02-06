const express = require("express");
const path = require("path");

const app = express();
app.get("/", (req, res) => {
  res.write("Hello from express");
  res.end();
});
app.use("/static", express.static(path.join(__dirname, "/src", "files")));
app.use("/api", require("./src/routes/api"));

module.exports = app;
