const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://bkashishh07:ashish077@cluster0.m5dtv9r.mongodb.net/canteen";
//   connect it
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", () => {
  console.log("Mongo DB connection failed");
});

module.exports = mongoose;
