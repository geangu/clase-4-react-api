require('./src/config/db');

const config = require('./src/config/constants');

const courses = require('./src/routes/Courses');
const auth = require('./src/routes/Users');

const cors = require('cors');
const express = require('express');
const { json, urlencoded } = require('express');

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded());

app.get('/', (req, res) => {
  res.send('<h1>API Courses</h1>');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.get('origin'));
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.status(200).send();
  }
  next();
});

app.use('/api/courses', courses);

app.use('/api/auth', auth);

app.listen(config.PORT, () => {
  console.log('Server is running in port: ', config.PORT);
});
