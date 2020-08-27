
// Import dependencies
import express = require('express'); 
import cors from 'cors';
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
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    //console.error(err.stack)
    res.status(500).send(err.message)
});

// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Listening on port 5000.");
})
