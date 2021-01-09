const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");
const PORT = process.env.PORT || 8080;
const app = express();

// allowing access to all files in the public folder
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting up handlebars engine 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// pulling in the routes created in the burgers_coontroller.js file to the server
app.use(routes);

// starting the app listening on the PORT
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});