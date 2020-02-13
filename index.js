'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

// Start the web server
require('./src/app.js').start(process.env.PORT);
