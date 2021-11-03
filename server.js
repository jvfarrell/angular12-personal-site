const express = require("express");
const path = require("path");

const ngApp = express();

ngApp.use(express.static("./dist/angular12-personal-site"));

ngApp.get("/*", function (request, response) {
  response.sendFile(
    path.join(__dirname, "/dist/angular12-personal-site/src/index.html")
  );
});

ngApp.listen(process.env.PORT || 8080);
