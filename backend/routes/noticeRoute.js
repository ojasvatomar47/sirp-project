import express from 'express';
import {
    getNotice, 
    getNotices,
    postNotice,
    updateNotice,
    deleteNotice
} from '../controllers/noticeController.js';

const router = express.Router()

// Get a single notice
router.get('/:noticeId', getNotice)

// GET all the notices
router.get('/', getNotices)

// POST a notice
router.post('/', postNotice)

// UPDATE a notice
router.put('/:noticeId', updateNotice)

// DELETE a notice
router.delete('/:noticeId', deleteNotice)

export default router;
