const express = require('express');
const router = express.Router();

// Static user data (dummy data)
const users = [
    { email: 'test@example.com', password: 'admin', name: 'Test User' }
];

// Login route
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/logout', (req, res) => {
    // If using sessions:
    // req.session.destroy(err => {
    //     if (err) {
    //         return res.status(500).send('Failed to log out');
    //     }
    //     res.clearCookie('connect.sid'); // Clear session cookie
    //     res.status(200).send('Logged out');
    // });

    // If using JWT tokens, you can invalidate the token here (optional, depending on your JWT strategy).
});


router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(400).send('Invalid credentials');
    }
    res.redirect('/dashboard');
});

// Register route
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const userExists = users.some(u => u.email === email);
    if (userExists) {
        return res.status(400).send('User already exists');
    }
    users.push({ name, email, password });
    res.redirect('/dashboard');
});

module.exports = router;
