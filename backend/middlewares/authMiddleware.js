export const verifyStudent = (req, res, next) => {
    const userRole = req.user.role;

    if (userRole === 'Student') {
        // Access granted
        next();
    } else {
        // Access denied
        res.status(403).json({ message: 'Access denied for this role' });
    }
};

export const verifyCaretakerWarden = (req, res, next) => {
    const userRole = req.user.role;

    if (userRole === 'Caretaker' || userRole === 'Warden') {
        // Access granted
        next();
    } else {
        // Access denied
        res.status(403).json({ message: 'Access denied for this role' });
    }
};
