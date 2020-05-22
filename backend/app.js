const express = require("express");
const expressApp = express();
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.port || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(authRoute);

expressApp.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    next();
});

mongoose
  .connect(
    "mongodb+srv://PhoneShop:PhoneShop123@cluster0-oohk7.mongodb.net/Shop?retryWrites=true",
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Database Connected!");
  })
  .catch(() => {
    console.log("Can not Connect to Database!!!!");
  });
  
app.listen(port, function() {
  console.log("Listening on port", port);
});