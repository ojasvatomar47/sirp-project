import express from 'express';
import jwt from "jsonwebtoken";
import { db } from "../db/db.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// FUNCTION: Student Registration
export const studentRegister = (req, res) => {

  // CHECK WHETHER THE STUDENT ALREADY EXISTS IN THE TABLE
  var q = "SELECT * FROM students WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data.length) {
      return res.status(409).json("User already exists!");
    }
  });

  // GENERATE A HASHED PASSWORD FOR THE ENTERED PASSWORD
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const date = new Date()

  // INSERTING A NEW STUDENT IN THE TABLE
  q = "INSERT INTO students (`username`, `email`, `password`, `name`, `hostel_name`, `role`, `registration_date`) VALUES (?)";

  const values = [req.body.username, req.body.email, hashedPassword, req.body.name, req.body.hostel, 'student', date];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log("error occurred while sending query in register");
      return res.status(500).json(err);
    }
    return res.status(200).json("User has been created");
  });

};

// FUNCTION: Student LogIn
export const studentLogin = (req, res) => {

  // CHECKING IF THE STUDENT EXISTS OR NOT
  var q = "SELECT * FROM students WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data.length === 0) {
      return res.status(404).json("User not found!");
    }

    // CHECKING IF THE ENTERED PASSWORD MATCHED THE STUDENT'S PASSWORD OR NOT
    const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);

    if (!checkPassword) {
      return res.status(400).json("Wrong password or username");
    }

    // ASSIGNING A TOKEN TO THE STUDENT
    const token = jwt.sign({ id: data[0].id, role: data[0].role }, "secretkey");
    const { password, ...other } = data[0];

    res.cookie("accessToken", token, {
      httpOnly: true,
    }).status(200).json(other);

  });
  
};

// FUNCTION: Student LogOut
export const studentLogout = (req, res) => {
  res.clearCookie("accessToken", {
    secure: true,
    sameSite: "none"
  }).status(200).json("User has been logged out");
};

export default router;
