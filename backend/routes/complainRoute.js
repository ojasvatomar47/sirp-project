import express from 'express';
import {
    getComplains,
    getComplain,
    studentComplains,
    getPendingComplains,
    getResolvedComplains,
    createComplain,
    updateComplain,
    updateComplainStatus,
    deleteComplain,
} from '../controllers/complainController.js';

const router = express.Router();

// Get all complaints of a paricular hostel
router.get('/', getComplains);

// Get a single complaint
router.get('/:complaintId', getComplain);

// Get all complaints of a particular student
router.get('/:studentId', studentComplains);

// Get all the complaints which are pending
router.get('/pending', getPendingComplains);

// Get all the complaints which are resolved
router.get('/resolved', getResolvedComplains);

// Create a new complaint 
router.post('/', createComplain);

// Update a complaint by ID 
router.put('/:complaintId', updateComplain);

// Update a complaint's status by ID
router.put('/:complaintId/status', updateComplainStatus);

// Delete a complaint by ID
router.delete('/:complaintId', deleteComplain);

export default router;
