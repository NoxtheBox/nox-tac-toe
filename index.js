const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.listen(process.env.PORT || 3000, () =>
  console.log("http://localhost:3000")
);
