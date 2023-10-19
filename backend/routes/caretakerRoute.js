import express from 'express';
import {
    caretakerRegister,
    caretakerLogin,
    caretakerLogout,
} from '../controllers/caretakerController.js';

const router = express.Router();

// Middleware for role-based authentication (checks if the user's role is 'Caretaker')
router.use((req, res, next) => {
    // Simulate checking the user's role from the JWT token or any other authentication mechanism
    const userRole = 'Caretaker'; // In a real application, this would come from the JWT token

    // Role-based logic
    if (userRole === 'Caretaker') {
        next(); // If the user is a caretaker, grant access
    } else {
        res.status(403).json('Access denied'); // Deny access for non-caretaker roles
    }
});

// Public route for caretaker registration
router.post('/register', caretakerRegister);

// Public route for caretaker login
router.post('/login', caretakerLogin);

// Protected route for caretaker logout
router.post('/logout', caretakerLogout);

// Protected route for the caretaker dashboard
// router.get('/dashboard', caretakerDashboard);

export default router;
