const express = require('express');
const path = require('path');
const { Server } = require('socket.io');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routers/auth'));         // Auth routes
app.use('/', require('./routers/dashboard'));    // Dashboard routes
app.use('/', require('./routers/crop'));         // Crop management routes
app.use('/', require('./routers/analytics'));    // Analytics routes

// Socket.io setup
let server;
if (process.env.NODE_ENV !== 'production') {
  const http = require('http');
  server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",  // Adjust as necessary
      methods: ["GET", "POST"]
    }
  });
  server.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
  });
}

module.exports = app; // Export the app for Vercel
