// Middleware for Hostel Access Control
export const checkHostelAccess = (req, res, next) => {
    const userRole = req.user.role;
    const userHostel = req.user.hostel;

    if (userRole === 'Student' || userRole === 'Caretaker' || userRole === 'Warden') {
        // Checking if the user's hostel matches the requested hostel
        if (userHostel === req.params.hostel) {
            // Access allowed
            next();
        } else {
            res.status(403).json('Access denied: Hostel does not match.');
        }
    } else {
        res.status(403).json('Access denied: Insufficient role.');
    }
};
