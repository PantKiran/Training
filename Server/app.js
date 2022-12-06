const express = require('express')
const app = express()
require("dotenv").config();

const userRoute  = require("./src/routes/userRoute");
app.use("/users", userRoute);
const connect = require("./src/db/mongoose");
connect();
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})