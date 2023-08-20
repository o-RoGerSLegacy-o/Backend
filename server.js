const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// middleWare
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://shubhamhugay1:bec0DkL8F39g6q4h@rogerscluster.mhjukf9.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => {
  console.log("the server is running is successfully");
});
