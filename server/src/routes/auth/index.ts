
import express from 'express';
import mongoose from 'mongoose';
import { usersModel, databaseUrl }  from '../../database-models/users-db'


const router = express.Router();

// connect to database and set up the schema
mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Get the default connection
let db = mongoose.connection;

// Open connection
db.once('open', () => {
    console.log('Connection to UsersDB open.');
});

// Handle potential errors
db.on('error', console.error.bind(console, "Something went wront with UsersDB.."));

// Log in
router.get('/login', (req, res) => {
    res.send("Log in route.");
});

// Sign up
router.get('/signup', (req, res) => {
    res.send("Sign up route.");
});

router.post('/signup', (req, res) => {
    const user = new usersModel(
        req.body
    );
    user.save();
    res.json("{status: added}");
})

module.exports = router;