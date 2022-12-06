const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema(
  {
    name: { type: String },
    phoneNumber: { type: Number },
    email: { type: String },
    password: { type: String },
    role: { type: String },
  },
  {
    collection: "Users",
  }
);
const usersModel = mongoose.model("usersModel", usersSchema);
module.exports = usersModel;
