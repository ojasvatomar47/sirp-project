import express from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../db/db.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Warden registration
export const wardenRegister = (req, res) => {
    // Check if the user already exists
    var q = "SELECT * FROM wardens WHERE email = ?";
    db.query(q, [req.body.email], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (data.length) {
            return res.status(409).json("User already exists!");
        }

        // Generate a salt and hash the warden's password for security
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        // Insert the new warden with role 'warden' into the database
        q = "INSERT INTO wardens (`email`, `password`, `name`, `hostel_name`, `role`) VALUES (?)";
        const values = [req.body.email, hashedPassword, req.body.name, req.body.hostel, 'warden'];

        db.query(q, [values], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).json("User has been created");
        });
    });
};

// Warden login
export const wardenLogin = (req, res) => {
    var q = "SELECT * FROM wardens WHERE email = ?";
    db.query(q, [req.body.email], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (data.length === 0) {
            return res.status(404).json("User not found!");
        }

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);

        if (!checkPassword) {
            return res.status(400).json("Wrong password or username");
        }

        const token = jwt.sign({ id: data[0].warden_id, role: data[0].role }, "secretkey");
        const { password, ...other } = data[0];

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(other);
    });
};

// Warden logout
export const wardenLogout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("User has been logged out");
};

export default router;
