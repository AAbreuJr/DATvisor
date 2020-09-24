const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const indexRouter = require('./routes/indexPage');
const preArrivalRouter = require('./routes/preArrival');
const postArrivalRouter = require('./routes/postArrival');
const locationIDRouter = require('./routes/locationID');
const myTripsRouter = require('./routes/myTrips')

const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/index', indexRouter);
app.use('/api/preArrival', preArrivalRouter);
app.use('/api/postArrival', postArrivalRouter);
app.use('/api/locationID', locationIDRouter);
app.use('/api/myTrip', myTripsRouter);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
  console.log(`Express is listening on port ${port}.`)
});
