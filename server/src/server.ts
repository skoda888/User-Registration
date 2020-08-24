
// Import dependencies
import express = require('express');
const morgan = require('morgan'); 
const cors = require('cors'); 
const bodyParser = require('body-parser');

// Create Express app
const app = express();

const accountModule = require('./routes/account');
app.use('/account', accountModule);

// Requests
app.get('/', (req, res) => {
    res.redirect('/account/login');
});

// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Listening on port 5000.");
})
