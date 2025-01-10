import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http';
import { connect } from 'mongoose';
import { config } from 'dotenv';

config(); 
const app = express(); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(cors()); // Cross-Origin Resource Sharing
app.use(cookieParser()); // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

const port = process.env.PORT || 5000; 
const server = http.createServer(app); 

// Connect to MongoDB
connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

// Routes
app.use('/api/movies', require('./routes/movieRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Listen to the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
