const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

// init middleware
app.use(logger);

// this route gets all members
app.get('/api/members', (req, res) => {
    res.json(members);
});

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// if the port number is given as an environment variable.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});