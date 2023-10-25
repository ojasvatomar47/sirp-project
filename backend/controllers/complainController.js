import { db } from "../db/db.js";

export const getComplains = (req, res) => {

    const { hostel } = req.query

    const q = `
        SELECT
            complaints.complaint_id,
            complaints.title,
            complaints.description,
            complaints.status,
            complaints.submission_date,
            complaints.hostel_name,
            students.username AS student_username,
            complaints.student_id,
            complaints.assigned_to
        FROM
            complaints
        INNER JOIN students ON complaints.student_id = students.student_id
        WHERE
            complaints.hostel_name = ?;
    `;

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

    const { hostel } = req.query

    const idString = req.params.complaintId
    const complainId = parseInt(idString.replace(':', ''), 10)

    const q = `
        SELECT 
            complaints.complaint_id,
            complaints.title,
            complaints.description,
            complaints.status,
            complaints.submission_date,
            complaints.hostel_name,
            students.username AS student_username,
            complaints.student_id,
            complaints.assigned_to
        FROM
            complaints
        INNER JOIN students ON complaints.student_id = students.student_id
        WHERE
            complaints.complaint_id = ?
        AND
            complaints.hostel_name = ?
    `

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

export const studentComplains = (req, res) => {

    const idString = req.params.studentId
    const studentId = parseInt(idString.replace(':', ''), 10)

    const q = `
        SELECT 
            complaints.complaint_id,
            complaints.title,
            complaints.description,
            complaints.status,
            complaints.submission_date,
            complaints.hostel_name,
            students.username AS student_username,
            complaints.student_id,
            complaints.assigned_to
        FROM
            complaints
        INNER JOIN students ON complaints.student_id = students.student_id
        WHERE
            complaints.student_id = ?
    `

    db.query(q, [studentId], (err, data) => {
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

export const getPendingComplainsCaretaker = (req, res) => {

    const { hostelName } = req.query

    const q = `
        SELECT 
            complaints.complaint_id,
            complaints.title,
            complaints.description,
            complaints.status,
            complaints.submission_date,
            complaints.hostel_name,
            students.username AS student_username,
            complaints.student_id,
            complaints.assigned_to
        FROM
            complaints
        INNER JOIN students ON complaints.student_id = students.student_id
        WHERE
            complaints.hostel_name = ?
        AND
            complaints.status = ?
        AND
            complaints.assigned_to = ?
    `

    db.query(q, [hostelName, 'Pending', 'Caretaker'], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } if (data.length === 0) {
            return res.status(404).json('No pending complaints for caretaker found')
        }
        else {
            return res.status(200).json(data)
        }
    })
}

export const getResolvedComplainsCaretaker = (req, res) => {

    const { hostelName } = req.query

    const q = `
        SELECT 
            complaints.complaint_id,
            complaints.title,
            complaints.description,
            complaints.status,
            complaints.submission_date,
            complaints.hostel_name,
            students.username AS student_username,
            complaints.student_id,
            complaints.assigned_to
        FROM
            complaints
        INNER JOIN students ON complaints.student_id = students.student_id
        WHERE
            complaints.hostel_name = ?
        AND
            complaints.status = ?
        AND
            complaints.assigned_to = ?
    `

    db.query(q, [hostelName, 'Solved', 'Caretaker'], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } if (data.length === 0) {
            return res.status(404).json('No resolved complaints for caretaker found')
        }
        else {
            return res.status(200).json(data)
        }
    })
}

export const getPendingComplainsWarden = (req, res) => {

    const { hostelName } = req.query

    const q = `
        SELECT 
            complaints.complaint_id,
            complaints.title,
            complaints.description,
            complaints.status,
            complaints.submission_date,
            complaints.hostel_name,
            students.username AS student_username,
            complaints.student_id,
            complaints.assigned_to
        FROM
            complaints
        INNER JOIN students ON complaints.student_id = students.student_id
        WHERE
            complaints.hostel_name = ?
        AND
            complaints.status = ?
        AND
            complaints.assigned_to = ?
    `

    db.query(q, [hostelName, 'Escalated', 'Warden'], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } if (data.length === 0) {
            return res.status(404).json('No pending complaints for warden found')
        }
        else {
            return res.status(200).json(data)
        }
    })
}

export const getResolvedComplainsWarden = (req, res) => {

    const { hostelName } = req.query

    const q = `
        SELECT 
            complaints.complaint_id,
            complaints.title,
            complaints.description,
            complaints.status,
            complaints.submission_date,
            complaints.hostel_name,
            students.username AS student_username,
            complaints.student_id,
            complaints.assigned_to
        FROM
            complaints
        INNER JOIN students ON complaints.student_id = students.student_id
        WHERE
            complaints.hostel_name = ?
        AND
            complaints.status = ?
        AND
            complaints.assigned_to = ?
    `

    db.query(q, [hostelName, 'Solved', 'Warden'], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } if (data.length === 0) {
            return res.status(404).json('No resolved complaints for warden found')
        }
        else {
            return res.status(200).json(data)
        }
    })
}

export const createComplain = (req, res) => {

    const { title, description, role, student_id, hostel_name } = req.body

    const submission_date = new Date()

    if (role == 'caretaker' || role == 'warden') {
        return res.status(403).json({ error: 'Unauthorized' })
    }

    const q = `
        INSERT INTO 
            complaints 
                (
                    title, 
                    description, 
                    status, 
                    submission_date, 
                    student_id, 
                    hostel_name,
                    assigned_to
                ) 
        VALUES 
            (?, ?, ?, ?, ?, ?, ?)`

    db.query(q, [title, description, 'Pending', submission_date, student_id, hostel_name, 'Caretaker'], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } else {
            res.status(201).json('Complaint created successfully')
        }
    })
}

export const updateComplainStatus = (req, res) => {

    const idString = req.params.complaintId
    const complainId = parseInt(idString.replace(':', ''), 10)

    const { status } = req.body;

    const q = 'UPDATE complaints SET status = ? WHERE complaint_id = ?'

    db.query(q, [status, complainId], (err, data) => {
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

    const idString = req.params.complaintId
    const complainId = parseInt(idString.replace(':', ''), 10)

    const { title, description, status, role } = req.body;

    const submission_date = new Date()

    if (role == 'caretaker' || role == 'warden') {
        return res.status(403).json({ error: 'Unauthorized' })
    }

    if (status === 'Solved') {
        return res.status(400).json('Complaint is already resolved!')
    }

    const q = 'UPDATE complaints SET title = ?, description = ?, submission_date = ? WHERE complaint_id = ?'

    db.query(q, [title, description, submission_date, complainId], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        else {
            res.status(200).json('Complaint updated successfully');
        }
    }
    )
}

export const forwardToWarden = (req, res) => {
    
    const idString = req.params.complaintId
    const complainId = parseInt(idString.replace(':', ''), 10)

    const q = "UPDATE complaints SET assigned_to = ?, status = ? WHERE complaint_id = ?"

    db.query(q, ['Warden', 'Escalated', complainId], (err, date) => {
        if(err) {
            return res.status(500).json(err)
        } else {
            return res.status(200).json('Complaint forwarded to warden')
        }
    })
}

export const deleteComplain = (req, res) => {

    const idString = req.params.complaintId
    const complainId = parseInt(idString.replace(':', ''), 10)

    const q = 'DELETE FROM complaints WHERE complaint_id = ?'

    db.query(q, [complainId], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        else {
            res.status(200).json('Complaint deleted successfully');
        }
    })
}