const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars');
const members = require('./Members');

const app = express();

// init middleware
// app.use(logger);

// handlebars middleware
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// homepage route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Member App',
        members 
    });
})

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// members API routes
app.use('/api/members', require('./routes/api/members'));

// if the port number is given as an environment variable.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});