const express = require('express');
const router = express.Router();

// Crop Analytics
router.get('/crop-analytics', (req, res) => {
    const user = { name: "Test User" };  // Simulate logged-in user
    res.render('crop-analytics', { user });
});

module.exports = router;
