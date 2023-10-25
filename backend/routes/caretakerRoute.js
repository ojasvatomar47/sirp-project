import express from 'express';
import {
    caretakerRegister,
    caretakerLogin,
    caretakerLogout,
} from '../controllers/caretakerController.js';

const router = express.Router();

// ROLE: Middleware
// FUNCTIONALITY: Role-Based-Authentication
router.use((req, res, next) => {
    const userRole = 'Caretaker';

    if (userRole === 'Caretaker') {
        next();
    } else {
        res.status(403).json('Access denied');
    }
});

// METHOD: POST
// ACCESS: Public
// FUNCTIONALITY: Caretaker Registration
router.post('/register', caretakerRegister);

// METHOD: POST
// ACCESS: Public
// FUNCTIONALITY: Caretaker Registration
router.post('/login', caretakerLogin);

// METHOD: POST
// ACCESS: Private
// FUNCTIONALITY: Caretaker Registration
router.post('/logout', caretakerLogout);

export default router;
