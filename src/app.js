require('dotenv').config();

const express = require('express');
const cors = require('cors');
// Proxy to redirect request

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API Gateway is running!');
})

module.exports = app;