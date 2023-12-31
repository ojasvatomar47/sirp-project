import { db } from "../db/db.js";

// FUNCTION: Get all the complaints of a particular hostel
// ACCESS TO: ALL
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

// FUNCTION: Get the required complaint
// ACCESS TO: ALL
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

// FUNCTION: Get a particular student's complaints
// ACCESS TO: STUDENT
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

// FUNCTION: Get caretaker and warden's information for a specific hostel
// ACCESS TO: STUDENT
export const getCaretakerWarden = (req, res) => {

    const { hostelName } = req.query

    const q = `
        SELECT
            caretaker_name,
            caretaker_email,
            warden_name,
            warden_email
        FROM
            hostels
        WHERE
            hostel_name = ?
    `

    db.query(q, [hostelName], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } 
        else {
            return res.status(200).json(data)
        }
    })
}

// FUNCTION: Get all the pending complaints assigned to the Caretaker
// ACCESS TO: CARETAKER
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

// FUNCTION: Get all resolved complaints assigned to a Caretaker
// ACCESS TO: CARETAKER
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

// FUNCTION: Get all the pending complaints escalated/assigned to the Warden
// ACCESS TO: WARDEN
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

// FUNCTION: Get all the resolved complaints assigned to the Warden
// ACCESS TO: WARDEN
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

// FUNCTION: Get the number of complaints registered by a particular student wrt the status
// ACCESS TO: STUDENT
export const getComplainsStatusCountStudent = (req, res) => {

    const idString = req.params.studentId
    const studentId = parseInt(idString.replace(':', ''), 10)

    const { status } = req.query;

    const q = `SELECT COUNT(*) AS statusComplainsCount FROM complaints WHERE student_id = ? AND status = ?`

    db.query(q, [studentId, status], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(data[0].statusComplainsCount);
    });
}

// FUNCTION: Get the total number of complaints registered for a particular hostel
// ACCESS TO: CARETAKER/WARDEN
export const countHostelStatusComplaints = (req, res) => {

    const { hostel, status } = req.query;

    const q = `SELECT COUNT(*) AS hostelStatusComplainsCount FROM complaints WHERE hostel_name = ? AND status = ?`

    db.query(q, [hostel, status], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(data[0].hostelStatusComplainsCount);
    });

}

// FUNCTION: Create a new complaint
// ACCESS TO: STUDENT
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

// FUNCTION: Update the status of a complaint
// ACCESS TO: CARETAKER/WARDEN
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

// FUNCTION: Update the title/description of a complaint
// ACCESS TO: STUDENT
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

// FUNCTION: Forward a complaint to the warden after two days of no activity on it
// ACCESS TO: STUDENT
export const forwardToWarden = (req, res) => {

    const idString = req.params.complaintId
    const complainId = parseInt(idString.replace(':', ''), 10)

    const q = "UPDATE complaints SET assigned_to = ?, status = ? WHERE complaint_id = ?"

    db.query(q, ['Warden', 'Escalated', complainId], (err, date) => {
        if (err) {
            return res.status(500).json(err)
        } else {
            return res.status(200).json('Complaint forwarded to warden')
        }
    })
}

// FUNCTION: Delete a particular complaint
// ACCESS TO: STUDENT
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