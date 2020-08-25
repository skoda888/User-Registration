
import express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Log in
router.get('/login', (req, res) => {
    res.send("Log in route.");
});

// Sign up
router.get('/signup', (req, res) => {
    res.send("Sign up route.");
});

module.exports = router;