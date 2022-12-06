const express = require('express')
const app = express()
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const userRoute  = require("./src/routes/userRoute");
// const loginRoute = require("./src/routes/loginRoute")
app.use("/users", userRoute);
// app.use("/login",loginRoute)
const connect = require("./src/db/mongoose");
connect();
app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})