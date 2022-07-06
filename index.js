const express = require('express');
const path = require('path');

const app = express();

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// if the port number is given as an environment variable.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});