const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
require('dotenv').config({path: path.resolve(__dirname, './.env')});
require("./config/db");
const mongoose = require("mongoose");

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());

const routes = require('./routes/api');

app.use('/api/', routes);

app.listen (port, () => {
    console.log(`This server is running on ${port}`);
})

