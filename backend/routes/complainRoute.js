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
} from '../controllers/complainController.js';

const router = express.Router();

// Get all complaints of a paricular hostel (checked)
router.get('/', getComplains);

// Get a single complaint (checked)
router.get('/singlecomplaint/:complaintId', getComplain);

// Get all complaints of a particular student (checked)
router.get('/student/:studentId', studentComplains);

// Get all the complaints filed to Caretaker which are pending
router.get('/caretaker/pending', getPendingComplainsCaretaker);

// Get all the complaints filed to Caretaker which are resolved
router.get('/caretaker/resolved', getResolvedComplainsCaretaker);

// Get all the complaints filed to Warden which are pending
router.get('/warden/pending', getPendingComplainsWarden);

// Get all the complaints filed to Warden which are resolved
router.get('/warden/resolved', getResolvedComplainsWarden);

// Create a new complaint (checked)
router.post('/', createComplain);

// Update a complaint by ID (checked)
router.put('/:complaintId', updateComplain);

// Update a complaint's status by ID (checked)
router.put('/status/:complaintId', updateComplainStatus);

// Update a complaint's assigned_to attribute (checked)
router.put('/forwardToWarden/:complaintId', forwardToWarden);

// Delete a complaint by ID (checked)
router.delete('/:complaintId', deleteComplain);

export default router;
