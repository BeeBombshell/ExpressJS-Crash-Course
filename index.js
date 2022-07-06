const express = require('express');
const path = require('path');

const app = express();

const members = [
    {
        id: 1,
        name: 'Morty Smith',
        email: 'morty@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Rick Sanchez',
        email: 'getschwifty@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Summer Smith',
        email: 'summer@gmail.com',
        status: 'inactive'
    },
    {
        id: 4,
        name: 'Beth Smith',
        email: 'beth@gmail.com',
        status: 'active'
    }
]

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