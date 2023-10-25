import { db } from "../db/db.js";

export const getNotices = (req, res) => {

    const { hostel } = req.query

    const q = `SELECT * FROM notices WHERE hostel = ?`;

    db.query(q, [hostel], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } if (data.length === 0) {
            return res.status(404).json("No notices found")
        } else {
            return res.status(200).json(data)
        }
    })

}

export const getNotice = (req, res) => {

    const idString = req.params.noticeId
    const noticeId = parseInt(idString.replace(':', ''), 10)

    const q = "SELECT * FROM notices WHERE notice_id = ?"

    db.query(q, [noticeId], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } if (data.length === 0) {
            return res.status(404).json("No notice found")
        } else {
            return res.status(200).json(data[0])
        }
    })

}

export const postNotice = (req, res) => {

    const { hostel, title, content, user_id, user_role } = req.body

    const date = new Date()

    const q = "INSERT INTO notices (hostel, title, content, date, user_id, user_role) VALUES (?, ?, ?, ?, ?, ?)"

    db.query(q, [hostel, title, content, date, user_id, user_role], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } else {
            return res.status(201).json("Notice created successfully")
        }
    })

}

export const updateNotice = (req, res) => {

    const { title, content } = req.body

    const idString = req.params.noticeId
    const noticeId = parseInt(idString.replace(':', ''), 10)

    const q = "UPDATE notices SET title = ?, content = ?, date = ? WHERE notice_id = ?"

    db.query(q, [title, content, noticeId], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } else {
            return res.status(200).json("Updated the notice successfully")
        }
    })

}

export const deleteNotice = (req, res) => {

    const idString = req.params.noticeId
    const noticeId = parseInt(idString.replace(':', ''), 10)

    const q = "DELETE FROM notices WHERE notice_id = ?"

    db.query(q, [noticeId], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } else {
            return res.status(200).json("Notice deleted successfully")
        }
    })
}