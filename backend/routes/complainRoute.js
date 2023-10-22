import express from 'express';
import {
    getComplains,
    getComplain,
    createComplain,
    updateComplain,
    updateComplainStatus,
    deleteComplain,
} from '../controllers/complainController.js';

const router = express.Router();

// Get all complaints
router.get('/', getComplains);

// Get a single complaint
router.get('/:complaintId', getComplain);

// Create a new complaint 
router.post('/', createComplain);

// Update a complaint by ID 
router.put('/:complaintId', updateComplain);

// Update a complaint's status by ID
router.put('/:complaintId/status', updateComplainStatus);

// Delete a complaint by ID)
router.delete('/:complaintId', deleteComplain);

export default router;
