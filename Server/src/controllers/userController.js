const express = require("express");
const User = require("../models/userSchema");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
exports.deleteUser =async(res,req)=>{
     try{
        const Data = await User.findByIdAndDelete(id)
        console.log(Data)
        console.log(Data)
        if(Data){
            res.json({
                msg:"user deleleted"
            })
        }
     }
     catch (error) {
        console.log(error);
        res.json({
          errorMsg: "Unable to delete users !",
          errorDetail: error,
        });
      }
}



exports.getUser = async(req,res)=>{
    try{
        const userData = await User.find()
        res.json({
            userData:userData
        })
    }
    catch (error) {
        console.log(error);
        res.send({
          errorMsg: "Unable to get users !",
          errorDetail: error,
        });
      }
}
exports.userRegister = async (req, res) => {
  try {
    bcrypt
      .hash(req.body.password, saltRounds)
      .then(function (hash) {
        req.body.password = hash;
      })
      .then((data) => {
        const appUser = User.create(req.body);
        res.json({
          message: "User Registered",
          userDetail: appUser,
        });
      });
  } catch (error) {
    console.log(error);
    res.send({
      errorMsg: "Unable to post user data!",
      errorDetail: error,
    });
  }
};
