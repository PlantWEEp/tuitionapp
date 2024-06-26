const express = require("express");
const connectDB = require("./db/connectDB");
const bodyParser = require("body-parser"); 
const helmet = require('helmet');
require('dotenv').config();

const app = express(); 
app.use(express.static('dist'))
app.use(bodyParser.json());
app.use(helmet());

const userRoutes = require('./routes/user.routes');
const questionRoutes = require('./routes/questionanswercorrection.routes');
const studentRoutes = require('./routes/student.routes');
  
app.use('/api/v1/admin', userRoutes);
app.use('/api/v1/question', questionRoutes);
app.use('/api/v1/student', studentRoutes);
app.use(express.static('public'))

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000);
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err);
  });
