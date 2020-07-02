const express = require("express");
const mongoose = require("mongoose");
const htmlRoute = require("./controller/html-routes");
const apiRoute = require("./controller/api-routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(htmlRoute);
app.use(apiRoute);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});