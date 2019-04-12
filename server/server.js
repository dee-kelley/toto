const express = require('express');
const app = express();
const port = 4000;
//const path = require("path");
//const bodyParser = require("body-parser");
//const tasks = require("./controllers/tasks")
//const cors = require("cors");

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true
//   })
// )
app.listen(port, function () {
    console.log("Server is LISTENINGGGG "+ port);
  });