import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { db } from './db/db.js';
import studentRoute from './routes/studentRoute.js';
import caretakerRoute from './routes/caretakerRoute.js';
import wardenRoute from './routes/wardenRoute.js';

const app = express();
const PORT = process.env.PORT || 8800;

// Middleware
app.use(express.json());
app.use(cors()); // Configure CORS settings as needed
app.use(cookieParser());

// Routes
app.use('/api/students', studentRoute);
app.use('/api/caretakers', caretakerRoute);
app.use('/api/wardens', wardenRoute);

// Database connection
db.connect((error) => {
    if (error) {
        console.log("Some error occurred!")
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
})

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
