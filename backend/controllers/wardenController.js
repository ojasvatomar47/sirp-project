import express from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../db/db.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

// FUNCTION: Warden Registration
export const wardenRegister = (req, res) => {

    // CHECK WHETHER THE WARDEN ALREADY EXISTS IN THE TABLE
    var checkUserQuery = "SELECT * FROM wardens WHERE email = ?";

    db.query(checkUserQuery, [req.body.email], (err, existingWardenData) => {
        if (err) {
            console.log("Error occurred");
            return res.status(500).json(err);
        }
        if (existingWardenData.length) {
            return res.status(409).json("Warden already exists!");
        }

        // VERIFYING IF THE ENTERED WARDEN AND THE HOSTEL'S WARDEN MATCHES OR NOT
        const hostelName = req.body.hostel;
        const wardenName = req.body.name;
        const wardenEmail = req.body.email;

        const checkHostelQuery = "SELECT warden_name, warden_email FROM hostels WHERE hostel_name = ?";
        db.query(checkHostelQuery, [hostelName], (hostelErr, data) => {
            if (hostelErr) {
                console.log("Error occurred while checking hostels table.");
                return res.status(500).json(hostelErr);
            }

            if (data.length === 0) {
                return res.status(404).json("Hostel not found.");
            }

            const { warden_name, warden_email } = data[0];

            if (wardenName !== warden_name || wardenEmail !== warden_email) {
                return res.status(403).json("Warden's details do not match the hostel information.");
            }

            // GENERATE A HASHED PASSWORD FOR THE ENTERED PASSWORD
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);

            const date = new Date()

            // INSERTING A NEW WARDEN IN THE TABLE
            const insertQuery = "INSERT INTO wardens (`email`, `password`, `name`, `hostel_name`, `role`, `registration_date`) VALUES (?)";
            const values = [req.body.email, hashedPassword, req.body.name, hostelName, 'warden', date];

            db.query(insertQuery, [values], (insertErr) => {
                if (insertErr) {
                    console.log("Error occurred while sending query in register.");
                    return res.status(500).json(insertErr);
                }
                return res.status(200).json("Warden has been created.");
            });
        });
    });
};

// FUNCTION: Warden LogIn
export const wardenLogin = (req, res) => {

    // CHECKING IF THE WARDEN EXISTS OR NOT
    var q = "SELECT * FROM wardens WHERE email = ?";

    db.query(q, [req.body.email], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (data.length === 0) {
            return res.status(404).json("User not found!");
        }

        // CHECKING IF THE ENTERED PASSWORD MATCHED THE WARDEN'S PASSWORD OR NOT
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);

        if (!checkPassword) {
            return res.status(400).json("Wrong password or username");
        }

        // ASSIGNING A TOKEN TO THE WARDEN
        const token = jwt.sign({ id: data[0].warden_id, role: data[0].role }, "secretkey");
        const { password, ...other } = data[0];

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(other);
    });
};

// FUNCTION: Warden LogOut
export const wardenLogout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("User has been logged out");
};

export default router;
