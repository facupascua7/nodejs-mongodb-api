const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to mongoDB...'))
  .catch((error) => console.log(error))


app.listen(port, () => console.log(`Listening on port ${port}...`));