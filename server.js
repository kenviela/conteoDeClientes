const express = require("express");
const app = express();
const methodOverride = require("method-override");
const port = 8000;
const mainRouter = require("./src/entities/home/routes");

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded());
app.use(methodOverride("_method"));

app.set("view engine", "pug");

app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.locals.basedir = __dirname;

app.use("/", mainRouter);

app.listen(port, () => {
  console.log("Todo se encuentra bien");
});
