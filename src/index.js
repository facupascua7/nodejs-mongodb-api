const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const createUserRoute = require('./routes/user.js');

const app = express();
const port = process.env.PORT || 3000;

// middleware

app.use(express.json());
app.use('/api', createUserRoute);

// routes 

app.get('/', (req, res) => {
  res.send('Welcome to this API');
});

// MongoDB connection

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to mongoDB...'))
  .catch((error) => console.log(error))

// Listening

app.listen(port, () => console.log(`Listening on port ${port}...`));