const express = require('express');
// const mongoose = require('mongoose');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 3030;

const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3040",  // Allow all origins (for testing purposes)
        methods: ["GET", "POST"]
    }
});
// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/agrismartAI', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected!'))
//     .catch(err => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routers/auth'));         // Auth routes
app.use('/', require('./routers/dashboard'));    // Dashboard routes
app.use('/', require('./routers/crop'));         // Crop management routes
app.use('/', require('./routers/analytics'));    // Analytics routes


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
