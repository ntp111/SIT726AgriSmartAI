const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Ensure the correct views path is set

// Routes
app.use('/', require('./routers/auth'));         // Auth routes
app.use('/', require('./routers/dashboard'));    // Dashboard routes
app.use('/', require('./routers/crop'));         // Crop management routes
app.use('/', require('./routers/analytics'));    // Analytics routes

// Export the app for use by Vercel
module.exports = app;
