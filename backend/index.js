import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.json("Hello there!")
})

app.listen(8801, () => {
    console.log("Connected to server!")
})