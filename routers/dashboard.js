const express = require('express');
const router = express.Router();

// Dashboard route
router.get('/dashboard', (req, res) => {
    const user = { name: "Test User" };  // Simulate logged-in user
    res.render('dashboard', { user });
});

module.exports = router;
