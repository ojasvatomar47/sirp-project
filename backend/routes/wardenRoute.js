import express from 'express';
import {
    wardenRegister,
    wardenLogin,
    wardenLogout,
} from '../controllers/wardenController.js';

const router = express.Router();

// Middleware for role-based authentication (checks if the user's role is 'Warden')
router.use((req, res, next) => {
    // Simulate checking the user's role from the JWT token or any other authentication mechanism
    const userRole = 'Warden'; // In a real application, this would come from the JWT token

    // Role-based logic
    if (userRole === 'Warden') {
        next(); // If the user is a warden, grant access
    } else {
        res.status(403).json('Access denied'); // Deny access for non-warden roles
    }
});

// Public route for warden registration
router.post('/register', wardenRegister);

// Public route for warden login
router.post('/login', wardenLogin);

// Protected route for warden logout
router.post('/logout', wardenLogout);

// Protected route for the warden dashboard
// router.get('/dashboard', wardenDashboard);

export default router;
