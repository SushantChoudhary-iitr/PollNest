const express = require('express');
const multer = require('multer');
const canvas = require('canvas');
const faceapi = require('face-api.js');
const path = require('path');
const fs = require('fs');


const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const signupRoute = require('./routes/signup');

const connectDB = require('./db.js');
dotenv.config();

//connect Database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', signupRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('server running on port 5000');
})