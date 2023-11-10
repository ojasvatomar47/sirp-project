import express from 'express';
import {
    studentRegister,
    studentLogin,
    studentLogout,
} from '../controllers/studentController.js';

const router = express.Router();

// ROLE: Middleware
// FUNCTIONALITY: Role-Based-Authentication
router.use((req, res, next) => {
    const userRole = 'Student';

    if (userRole === 'Student') {
        next();
    } else {
        res.status(403).json('Access denied');
    }
});


// METHOD: POST
// ACCESS: Public
// FUNCTIONALITY: Student Registration
router.post('/register', studentRegister);

// METHOD: POST
// ACCESS: Public
// FUNCTIONALITY: Student Log-In
router.post('/login', studentLogin);

// METHOD: POST
// ACCESS: Private
// FUNCTIONALITY: Student Logout
router.post('/logout', studentLogout);

export default router;
