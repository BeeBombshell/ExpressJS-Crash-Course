const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// init middleware
app.use(logger);

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// members API routes
app.use('/api/members', require('./routes/api/members'));

// if the port number is given as an environment variable.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});