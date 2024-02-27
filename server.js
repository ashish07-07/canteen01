// const express = require("express");

// // const Food = recquire("./models/foodModel);
// const Food = require("./models/foodModel");
// const db = require("./db");
// const app = express();

// const port = process.env.PORT || 5000;

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Server working properly" + port);
// });
// app.get("/getfood", (req, res) => {
//   Food.find({}, (error, docs) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(docs);
//     }
//   });
// });

// 2 nd
// const express = require("express");
// const Food = require("./models/foodModel");
// const db = require("./db");
// const app = express();

// const port = process.env.PORT || 8060;

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Server working properly on port " + port);
// });

// app.get("/getfood", (req, res) => {
//   Food.find()
//     .then((docs) => {
//       res.send(docs);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.listen(port, () => {
//   console.log("Server running on port", port);
// });

// app.listen(port, () => {
//   console.log("Server running on port", port);
// });

//  3rd
const express = require("express");
const Food = require("./models/foodModel");
const db = require("./db");
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
const foodasRoute = require("./routes/foodasRoute");

app.use("/api/foodas/", foodasRoute);

app.get("/", (req, res) => {
  res.send("Server working properly on port " + port);
});

// app.get("/getfood", (req, res) => {
//   Food.find()
//     .then((docs) => {
//       res.send(docs);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.listen(port, () => {
  console.log("Server running on port", port);
});
