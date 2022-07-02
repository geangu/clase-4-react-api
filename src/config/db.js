const { MONGODB_URL } = require('./constants');

const mongoose = require('mongoose');

mongoose.connect(MONGODB_URL).then(() => {
  console.log('MongoDB Connection Done');
});
