import express from 'express';
import {
    getNotice, 
    getNotices,
    postNotice,
    updateNotice,
    deleteNotice
} from '../controllers/noticeController.js';

const router = express.Router()

// METHOD: GET
// ACCESS: Public
// FUNCTIONALITY: Get all the notices of a particular hostel
router.get('/:noticeId', getNotice)

// METHOD: GET
// ACCESS: Public
// FUNCTIONALITY: Get the required notice
router.get('/', getNotices)

// METHOD: POST
// ACCESS: Private
// FUNCTIONALITY: Post a notice
router.post('/', postNotice)

// METHOD: PUT
// ACCESS: Private
// FUNCTIONALITY: Update a notice
router.put('/:noticeId', updateNotice)

// METHOD: DELETE
// ACCESS: Private
// FUNCTIONALITY: Delete a notice
router.delete('/:noticeId', deleteNotice)

export default router;
