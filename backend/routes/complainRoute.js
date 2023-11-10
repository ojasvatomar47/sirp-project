import express from 'express';
import {
    getComplains,
    getComplain,
    studentComplains,
    getPendingComplainsCaretaker,
    getResolvedComplainsCaretaker,
    getPendingComplainsWarden,
    getResolvedComplainsWarden,
    createComplain,
    updateComplain,
    updateComplainStatus,
    forwardToWarden,
    deleteComplain,
    getComplainsStatusCountStudent,
    countHostelStatusComplaints,
    getCaretakerWarden
} from '../controllers/complainController.js';

const router = express.Router();

// METHOD: GET
// ACCESS: Public
// FUNCTIONALITY: Get all the complaints of a particular hostel
router.get('/', getComplains);

// METHOD: GET
// ACCESS: Public
// FUNCTIONALITY: Get the required complaint
router.get('/singlecomplaint/:complaintId', getComplain);

// METHOD: GET
// ACCESS: Private
// FUNCTIONALITY: Get all the complaints registered by a student
router.get('/student/:studentId', studentComplains);

// METHOD: GET
// ACCESS: Private
// FUNCTIONALITY: Get caretaker and warden's information
router.get('/caretakerWardenInfo', getCaretakerWarden);

// METHOD: GET
// ACCESS: Private
// FUNCTIONALITY: Get all the pending complaints with assigned_to = Caretaker
router.get('/caretaker/pending', getPendingComplainsCaretaker);

// METHOD: GET
// ACCESS: Private
// FUNCTIONALITY: Get all the resolved complaints with assigned_to = Caretaker
router.get('/caretaker/resolved', getResolvedComplainsCaretaker);

// METHOD: GET
// ACCESS: Private
// FUNCTIONALITY: Get all the escalated complaints with assigned_to = Warden
router.get('/warden/pending', getPendingComplainsWarden);

// METHOD: GET
// ACCESS: Private
// FUNCTIONALITY: Get all the resolved complaints with assigned_to = Warden
router.get('/warden/resolved', getResolvedComplainsWarden);

// METHOD: GET
// ACCESS: Private
// FUNCTIONALITY: Get total number of complaints registered by a particular student wrt status
router.get('/studentStatusComplains/:studentId', getComplainsStatusCountStudent)

// METHOD: GET
// ACCESS: Private
// FUNCTIONALITY: Get total number of complaints registered for a hostel
router.get('/countHostelComplaints', countHostelStatusComplaints)

// METHOD: POST
// ACCESS: Private
// FUNCTIONALITY: Register a complaint
router.post('/', createComplain);

// METHOD: PUT
// ACCESS: Private
// FUNCTIONALITY: Update a complaint
router.put('/:complaintId', updateComplain);

// METHOD: PUT
// ACCESS: Private
// FUNCTIONALITY: Update the status of a complaint
router.put('/status/:complaintId', updateComplainStatus);

// METHOD: PUT
// ACCESS: Private
// FUNCTIONALITY: Change the assigned_to from Caretaker to Warden
router.put('/forwardToWarden/:complaintId', forwardToWarden);

// METHOD: DELETE
// ACCESS: Private
// FUNCTIONALITY: Delete a complaint
router.delete('/:complaintId', deleteComplain);

export default router;
