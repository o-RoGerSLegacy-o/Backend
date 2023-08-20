const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../Models/User");
const becrypt = require("becrypt");
router.post("/registeruser", async (req, res) => {
  try {
    const { name, email, password, imageUrl, address, age } = req.body;

    //checking if the user Already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ error: "User Already Exists Bruh " });
    }

    //masking the password using becrypt
    const hashedPassword = await becrypt(password, 10);

    //creating the new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
  } catch (error) {}
});

//this api searches the user in the db and send the response to the user

router.get("/searchuser", async (req, res) => {
  try {
    const { query } = req.query;
    //seach the user

    const users = await User.find({
      $or: [
        { name: { $regex: query, $option: "i" } },
        { email: { $regex: query, $option: "i" } },
      ],
    });
    if (users.lenght === 0) {
      return res.status(404).json({ error: "user doesnt exist " });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "error searching users" });
  }
});
