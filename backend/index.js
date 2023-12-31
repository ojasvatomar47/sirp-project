import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { db } from './db/db.js';
import studentRoute from './routes/studentRoute.js';
import caretakerRoute from './routes/caretakerRoute.js';
import wardenRoute from './routes/wardenRoute.js';
import complainRoute from './routes/complainRoute.js';
import noticeRoute from './routes/noticeRoute.js';

const app = express();
const PORT = process.env.PORT || 8800;

// MIDDLEWARES
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use('/api/students', studentRoute);
app.use('/api/caretakers', caretakerRoute);
app.use('/api/wardens', wardenRoute);
app.use('/api/complain', complainRoute);
app.use('/api/notice', noticeRoute)

// DATABASE CONNECTION
db.connect((error) => {
    if (error) {
        console.log("Some error occurred!")
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
})

// SERVER CONNECTION
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
