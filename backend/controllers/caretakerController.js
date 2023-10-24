import express from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../db/db.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Caretaker registration
export const caretakerRegister = (req, res) => {
    // Check if the user already exists
    var checkUserQuery = "SELECT * FROM caretakers WHERE email = ?";

    db.query(checkUserQuery, [req.body.email], (err, existingCaretakerData) => {
        if (err) {
            console.log("Error occurred");
            return res.status(500).json(err);
        }
        if (existingCaretakerData.length) {
            return res.status(409).json("Caretaker already exists!");
        }

        // Verify if the caretaker's details match those in the hostels table
        const hostelName = req.body.hostel;
        const caretakerName = req.body.name;
        const caretakerEmail = req.body.email;

        const checkHostelQuery = "SELECT caretaker_name, caretaker_email FROM hostels WHERE hostel_name = ?";
        db.query(checkHostelQuery, [hostelName], (hostelErr, data) => {
            if (hostelErr) {
                console.log("Error occurred while checking hostels table.");
                return res.status(500).json(hostelErr);
            }

            if (data.length === 0) {
                return res.status(404).json("Hostel not found.");
            }

            const { caretaker_name, caretaker_email } = data[0];

            if (caretakerName !== caretaker_name || caretakerEmail !== caretaker_email) {
                return res.status(403).json("Caretaker's details do not match the hostel information.");
            }

            // Generate a salt and hash the caretaker's password for security
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);

            const date = new Date()

            // Insert the new caretaker with role 'caretaker' into the database
            const insertQuery = "INSERT INTO caretakers (`email`, `password`, `name`, `hostel_name`, `role`, `registration_date`) VALUES (?)";
            const values = [req.body.email, hashedPassword, req.body.name, hostelName, 'caretaker', date];

            db.query(insertQuery, [values], (insertErr) => {
                if (insertErr) {
                    console.log("Error occurred while sending query in register.");
                    return res.status(500).json(insertErr);
                }
                return res.status(200).json("Caretaker has been created.");
            });
        });
    });
};


// Caretaker login
export const caretakerLogin = (req, res) => {
    var q = "SELECT * FROM caretakers WHERE email = ?";
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

        const token = jwt.sign({ id: data[0].id, role: data[0].role }, "secretkey");
        const { password, ...other } = data[0];

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(other);
    });
};

// Caretaker logout
export const caretakerLogout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("User has been logged out");
};

export default router;
