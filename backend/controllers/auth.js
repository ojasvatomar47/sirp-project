import jwt from "jsonwebtoken"
import { db } from "../db/db.js"
import bcrypt from 'bcryptjs'

export const register = (req, res) => {

    // check if the user already exists

    var q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) {
            console.log("error occurred while sending query in register")
            return res.status(500).json(err)
        }
        if (data.length) {
            console.log("user exists")
            return res.status(409).json("User already exists!")
        }
    })

    // if the user does not exists, create a new user

    // hash password
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)

    q = "INSERT INTO users (`username`, `email`, `password`, `name`, `hostel`) VALUES (?)"

    const values = [req.body.username, req.body.email, hashedPassword, req.body.name, req.body.hostel]

    db.query(q, [values], (err, data) => {
        if (err) {
            console.log("error occurred while sending query in register")
            return res.status(500).json(err)
        }
        else
            return res.status(200).json("User has been created")
    })

}

export const login = (req, res) => {

    var q = "SELECT * FROM users WHERE email = ?"

    db.query(q, [req.body.email], (err, data) => {

        if (err)
            return res.status(500).json(err)
        if (data.length === 0)
            return res.status(404).json("User not found!")

        // check password
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password) // query returns us an array of one object which is our user here and thus data contains this

        if (!checkPassword)
            return res.status(400).json("Wrong password or username")

        // we'll send our userid to jwt to check whether our userid is equal to the userid of the complaint if yes then we can delete or update it
        const token = jwt.sign({ id: data[0].id }, "secretkey")

        // now send our user information and jwt

        // seperates password and the other user information
        const { password, ...other } = data[0]

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(other)

        // in the cookie we'll get an access token and using that we can do anything like updating adding or deleting any complaint after decrypting  the hash token from we got from it

    })
}

export const logout = (req, res) => {

    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none" // since the port of our frontend and backend are different so it might block us to clear the cookie that's why we used this
    }).status(200).json("User has been logged out")
}