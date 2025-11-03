const express = require("express");
const cors = require("cors");
const app = express();
const contactRoute = require("./app/routes/contact.route");

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoute);

module.exports = app;
