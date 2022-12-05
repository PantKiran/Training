const express = require('express')
const app = express()
require("dotenv").config();
const port = 3000

const userRoute  = require("./src/routes/userRoute");
app.use("/user", userRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})