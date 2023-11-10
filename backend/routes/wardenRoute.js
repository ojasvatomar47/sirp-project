import express from 'express';
import {
    wardenRegister,
    wardenLogin,
    wardenLogout,
} from '../controllers/wardenController.js';

const router = express.Router();

// ROLE: Middleware
// FUNCTIONALITY: Role-Based-Authentication
router.use((req, res, next) => {

    const userRole = 'Warden';

    if (userRole === 'Warden') {
        next();
    } else {
        res.status(403).json('Access denied');
    }
});

// METHOD: POST
// ACCESS: Public
// FUNCTIONALITY: Warden Registration
router.post('/register', wardenRegister);

// METHOD: POST
// ACCESS: Public
// FUNCTIONALITY: Warden Registration
router.post('/login', wardenLogin);

// METHOD: POST
// ACCESS: Private
// FUNCTIONALITY: Warden Registration
router.post('/logout', wardenLogout);

export default router;
