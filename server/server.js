/**
 * author: Denis Kravchenko
 */
const express = require("express");
const port = 4000;
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//preventing the cors errors
app.use(cors());

//making sure we get data in the json format
app.use(bodyParser.json());

//connecting to a database
mongoose.connect("mongodb://localhost/movies", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Successful connection..."));

//importing the routes
const router = require("./routes/movieInfo");

//adding the API endpoints
app.use("/api", router);

app.listen(port, () => console.log("Server is up, port is : " + port));
