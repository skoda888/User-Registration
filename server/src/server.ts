
// Import dependencies
import express = require('express'); 
const cors = require('cors'); 
const volleyball = require('volleyball');

// Create Express app
const app = express();
app.use(express.json());
app.use(cors());
app.use(volleyball);

const accountModule = require('./routes/auth');
app.use('/auth', accountModule);


// Requests
app.get('/', (req, res) => {
    res.redirect('/auth/login');
});

// Error handling


// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Listening on port 5000.");
})
