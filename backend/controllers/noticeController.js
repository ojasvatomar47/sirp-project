import { db } from "../db/db.js";

// FUNCTION: Get all the notices of a particular hostel
// ACCESS TO: ALL
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

// FUNCTION: Get a particular notice
// ACCESS TO: ALL
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

// FUNCTION: Post a notice
// ACCESS TO: CARETAKER/WARDEN
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

// FUNCTION: Update a notice
// ACCESS TO: CARETAKER/WARDEN
export const updateNotice = (req, res) => {

    const { title, content } = req.body

    const idString = req.params.noticeId
    const noticeId = parseInt(idString.replace(':', ''), 10)

    const date = new Date()

    const q = "UPDATE notices SET title = ?, content = ?, date = ? WHERE notice_id = ?"

    db.query(q, [title, content, date, noticeId], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } else {
            return res.status(200).json("Updated the notice successfully")
        }
    })

}

// FUNCTION: Delete a notice
// ACCESS TO: CARETAKER/WARDEN
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