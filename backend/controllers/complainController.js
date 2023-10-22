import { db } from "../db/db.js";

export const getComplains = (req, res) => {

    const { hostel } = req.body

    const q = "SELECT * FROM complaints WHERE hostel_name = ?"

    db.query(q, [hostel], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } if (data.length === 0) {
            return res.status(404).json('No Complaints found')
        }
        else {
            return res.status(200).json(data)
        }
    })
}

export const getComplain = (req, res) => {

    const { hostel, complainId } = req.params

    const q = 'SELECT * FROM complains WHERE complaint_id=? AND hostel_name=?'

    db.query(q, [complainId, hostel], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } if (data.length === 0) {
            return res.status(404).json('Complaint not found')
        }
        else {
            return res.status(200).json(data[0])
        }
    })
}

export const createComplain = (req, res) => {

    const { title, description, role, student_id, hostel_name } = req.body

    const submission_date = new Date()

    if (role == 'caretaker' || role == 'warden') {
        return res.status(403).json({ error: 'Unauthorized' })
    }

    const q = "INSERT INTO complaints (title, description, status, submission_date, student_id, hostel_name) VALUES (?, ?, ?, ?, ?, ?)"

    db.query(q, [title, description, 'Pending', submission_date, student_id, hostel_name], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } else {
            res.status(201).json('Complaint created successfully')
        }
    })
}

export const updateComplainStatus = (req, res) => {

    const { complaintId } = req.params;

    const { status } = req.body;

    if(role=='student') {
        return res.status(403).json({ error: 'Unauthorized' })
    }

    const q = 'UPDATE complaints SET status = ? WHERE complaint_id = ?'

    db.query(q, [status, complaintId], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        else {
            res.status(200).json('Complaint status updated successfully');
        }
    }
    );
}

export const updateComplain = (req, res) => {

    const { complaintId } = req.params;

    const { title, description, status, role } = req.body;

    const submission_date = new Date()

    if (role == 'caretaker' || role == 'warden') {
        return res.status(403).json({ error: 'Unauthorized' })
    }

    if (status === 'Solved') {
        return res.status(400).json('Complaint is already resolved!')
    }

    const q = 'UPDATE complaints SET title = ?, description = ?, submission_date = ? WHERE complaint_id = ?'

    db.query(q, [title, description, submission_date, complaintId], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        else {
            res.status(200).json('Complaint updated successfully');
        }
    }
    )
}

export const deleteComplain = (req, res) => {

    const { complaintId } = req.params;

    const { status } = req.body;

    if (role == 'caretaker' || role == 'warden') {
        res.status(403).json({ error: 'Unauthorized' })
    }

    if (status === 'Solved') {
        return res.status(400).json('Complaint is resolved!')
    }

    const q = 'DELETE FROM complaints WHERE complaint_id = ?'

    db.query(q, [complaintId], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        else {
            res.status(200).json('Complaint deleted successfully');
        }
    })
}