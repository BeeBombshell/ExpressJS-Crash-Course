const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

// if the port number is given as an environment variable.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});