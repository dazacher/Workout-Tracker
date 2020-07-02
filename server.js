const express = require("express");
const mongoose = require("mongoose");
const htmlRoute = require("./controller/html-routes");
const apiRoute = require("./controller/api-routes");

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;
// Tells node that we are creating an "express" server
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", { useNewUrlParser: true, useUnifiedTopology: true });

// ================================================================================
// APP
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// the routes are defined in require statements above.
// ================================================================================
app.use(htmlRoute);
app.use(apiRoute);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});