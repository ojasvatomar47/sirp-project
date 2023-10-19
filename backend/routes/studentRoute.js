import express from 'express';
import {
    studentRegister,
    studentLogin,
    studentLogout,
} from '../controllers/studentController.js';

const router = express.Router();

// Middleware for role-based authentication (checks if the user's role is 'Student')
router.use((req, res, next) => {
    // Simulate checking the user's role from the JWT token or any other authentication mechanism
    const userRole = 'Student'; // In a real application, this would come from the JWT token

    // Role-based logic
    if (userRole === 'Student') {
        next(); // If the user is a student, grant access
    } else {
        res.status(403).json('Access denied'); // Deny access for non-student roles
    }
});

// Public route for student registration
router.post('/register', studentRegister);

// Public route for student login
router.post('/login', studentLogin);

// Protected route for student logout
router.post('/logout', studentLogout);

// Protected route for the student dashboard
// router.get('/dashboard', studentDashboard);

export default router;
