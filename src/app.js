require('dotenv').config();

const express = require('express');
const cors = require('cors');
// Proxy to redirect request
const proxy = require('express-http-proxy');

const app = express();
app.use(express.json());
app.use(cors());

const postService = process.env.POST_SERVICE || 'https://jsonplaceholder.typicode.com/posts';
const commentService = process.env.COMMENT_SERVICE || 'https://jsonplaceholder.typicode.com/posts';
const authService = process.env.AUTH_SERVICE || 'https://jsonplaceholder.typicode.com/posts';

// Redirect
app.use('/posts', proxy(postService));
app.use('/comments', proxy(commentService));
app.use('/auth', proxy(authService));

app.get('/', (req, res) => {
    res.send('API Gateway is running!');
})

module.exports = app;