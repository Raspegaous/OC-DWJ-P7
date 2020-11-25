require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
const commentRoute = require('./routes/comment');
const userRoute = require('./routes/user')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);
app.use('/api/comment', commentRoute);
app.use('/api/users', userRoute);

module.exports = app;
