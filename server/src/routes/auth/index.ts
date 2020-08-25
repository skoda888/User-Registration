
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Log in
router.get('/login', (req, res) => {
    res.send("Log in route.");
});

// Sign up
router.get('/signup', (req, res) => {
    res.send("Sign up route.");
});

router.post('/signup', (req, res) => {
    res.json(req.body);
})

module.exports = router;