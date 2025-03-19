const express = require('express');
const app = express();
const PORT = require('dotenv').config();
const db = require('./config/db');
db();






app.listen(process.env.PORT, () => {
    console.log('Server Running');
})


module.exports = app;